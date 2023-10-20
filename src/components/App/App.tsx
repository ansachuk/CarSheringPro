import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectIsLoading } from "../../toolkit/selectors/carsSelectors";

import Layout from "../Layout/Layout";
import Loader from "../Loader/Loader";

const MainPage = lazy(() => import("../../pages/MainPage/MainPage"));
const CatalogPage = lazy(() => import("../..//pages/CatalogPage/CatalogPage.jsx"));
const FavoritePage = lazy(() => import("../..//pages/FavoritePage/FavoritePage.jsx"));

function App() {
	const isLoading = useSelector(selectIsLoading);
	return (
		<>
			{isLoading && <Loader />}

			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<MainPage />} />
					<Route path="catalog" element={<CatalogPage />} />
					<Route path="favorites" element={<FavoritePage />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
