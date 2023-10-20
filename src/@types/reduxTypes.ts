import store from "../toolkit/store";
import { Car } from "./types";

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
