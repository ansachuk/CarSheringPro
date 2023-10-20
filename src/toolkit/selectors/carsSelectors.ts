import { AppState } from "../../@types/reduxTypes";

export const selectAllCars = (state: AppState) => state.allCars;
export const selectCarsToShow = (state: AppState) => state.carsToShow;
export const selectFavorites = (state: AppState) => state.favorites;
export const selectBrands = (state: AppState) => state.brands;
export const selectPage = (state: AppState) => state.page;
export const selectIsLoading = (state: AppState) => state.isLoading;
export const selectError = (state: AppState) => state.error;
