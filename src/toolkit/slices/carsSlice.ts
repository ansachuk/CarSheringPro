import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { getAll } from "../operations/carsOperations";
import { AppState, IFilter } from "../../@types/reduxTypes";
import { createDataArray } from "../../utils/utils";

const initialState: AppState = {
	allCars: [],
	carsToShow: [],
	favorites: [],
	brands: [],
	page: 1,
	isLoading: false,
	error: null,
};

const carsSlice = createSlice({
	name: "cars",
	initialState,
	reducers: {
		increasePage(state) {
			state.page += 1;
			state.carsToShow = [...state.allCars.slice(0, state.page * 8 + 8)];
		},

		setFilter(state, action: PayloadAction<Partial<IFilter>>) {
			const {
				payload: { mileageTo, mileageFrom, brand, priceTo },
			} = action;

			if (!mileageFrom && !mileageTo && !brand && !priceTo) {
				state.carsToShow = state.allCars.slice(0, 8);
				return;
			}

			state.carsToShow = state.allCars.filter(el => {
				const milTo = mileageTo ? el.mileage.toString() <= mileageTo : true;
				const milFrom = mileageFrom ? el.mileage.toString() >= mileageFrom : true;
				const carBrand = brand ? el.make.includes(brand) : true;
				const price = priceTo ? Number(el.rentalPrice.slice(1)) <= Number(priceTo) : true;

				if (milFrom && milTo && carBrand && price) {
					return el;
				}
				return;
			});
		},

		addToFavorite(state, { payload }) {
			state.favorites.push(payload);
		},
		removeFromFavorite(state, { payload }) {
			state.favorites = state.favorites.filter(item => item.id !== payload);
		},
	},
	extraReducers: builder => {
		builder
			.addCase(getAll.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(getAll.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;

				state.allCars = payload;
				state.brands = createDataArray(state.allCars);
				state.carsToShow = state.allCars.slice(0, 8);
			})
			.addCase(getAll.rejected.type, (state, action: PayloadAction<Error>) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { increasePage, setFilter, addToFavorite, removeFromFavorite } = carsSlice.actions;

export default carsSlice.reducer;
