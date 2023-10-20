import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAll } from "../../toolkit/operations/carsOperations";
import { increasePage } from "../../toolkit/slices/carsSlice";

import { selectCarsToShow, selectAllCars } from "../../toolkit/selectors/carsSelectors.js";

import Filter from "../../components/Filter/Filter";
import CardList from "../../components/CardList/CardList";

import css from "./CatalogPage.module.scss";

export default function CatalogPage() {
	const disp = useDispatch();
	const allCars = useSelector(selectAllCars);
	const carsToShow = useSelector(selectCarsToShow);

	useEffect(() => {
		if (!allCars.length) {
			disp(getAll());
		}
	}, [allCars.length, disp]);

	return (
		<div className={css.wrapper}>
			<Filter />
			<CardList list={carsToShow} />

			{allCars.length > carsToShow.length && (
				<button onClick={() => disp(increasePage())} className={css.loadMore}>
					Load More...
				</button>
			)}
		</div>
	);
}
