import { createSlice } from "@reduxjs/toolkit";
import { getAll } from "../operations/carsOperations";
import { createDataArray } from "../../utils/utils";

const initialState = {
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
			.addCase(getAll.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			});
	},
});

export const { increasePage, addToFavorite, removeFromFavorite } = carsSlice.actions;

export default carsSlice.reducer;
