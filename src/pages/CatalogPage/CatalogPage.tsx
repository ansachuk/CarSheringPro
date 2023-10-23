import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getAll } from "../../toolkit/operations/carsOperations.js";
import { increasePage, setFilter } from "../../toolkit/slices/carsSlice.js";
import { selectCarsToShow, selectAllCars } from "../../toolkit/selectors/carsSelectors.js";

import { AppDispatch } from "../../@types/reduxTypes.js";

import Filter from "../../components/Filter/Filter.jsx";
import CardList from "../../components/CardList/CardList.jsx";
import NotFound from "../../components/NotFound/NotFound.js";

import css from "./CatalogPage.module.scss";

export default function CatalogPage() {
	const disp = useDispatch<AppDispatch>();
	const allCars = useSelector(selectAllCars);
	const carsToShow = useSelector(selectCarsToShow);

	const [searchParams] = useSearchParams();
	const params = useMemo(() => Object.fromEntries([...searchParams]), [searchParams]);

	useEffect(() => {
		const fetchAll = async () => {
			if (!allCars.length) {
				await disp(getAll());
			}
			disp(setFilter({ ...params }));
		};

		fetchAll();
	}, [allCars.length, disp, params]);

	return (
		<div className={css.wrapper}>
			<Filter />
			<CardList list={carsToShow} />

			{allCars.length > carsToShow.length && carsToShow.length >= 8 && (
				<button onClick={() => disp(increasePage())} className={css.loadMore}>
					Load More...
				</button>
			)}

			{carsToShow.length === 0 && <NotFound title="No cars!" />}
		</div>
	);
}
