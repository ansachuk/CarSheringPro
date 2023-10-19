import store from "../toolkit/store";
import { Car } from "./types";

export interface IFilter {
	brand: string;
	priceTo: string;
	mileageFrom: string;
	mileageTo: string;
}

export type AppState = {
	allCars: Array<Car>;
	carsToShow: Array<Car>;
	favorites: Array<Car>;
	brands: Array<string>;
	page: number;
	isLoading: boolean;
	error: Error | null;
};

export type AppDispatch = typeof store.dispatch;
