import { configureStore } from "@reduxjs/toolkit";

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

import carsReducer from "./slices/carsSlice";

const persistConfig = {
	key: "favorites",
	storage,
	whitelist: ["favorites"],
	// whitelist: ["favorites", "allCars"],
};

const persistedReducer = persistReducer(persistConfig, carsReducer);

const store = configureStore({
	reducer: persistedReducer,

	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);

export default store;
