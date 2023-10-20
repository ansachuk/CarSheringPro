import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import Layout from "../Layout/Layout";
import Loader from "../Loader/Loader";
import { selectIsLoading } from "../../toolkit/selectors/carsSelectors";

const MainPage = lazy(() => import("/src/pages/MainPage/MainPage.jsx"));
const CatalogPage = lazy(() => import("/src/pages/CatalogPage/CatalogPage.jsx"));
const FavoritePage = lazy(() => import("/src/pages/FavoritePage/FavoritePage.jsx"));

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
