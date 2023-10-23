import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectFavorites } from "../../toolkit/selectors/carsSelectors";

import CardList from "../../components/CardList/CardList";
import NotFound from "../../components/NotFound/NotFound";

import css from "../../components/NotFound/NotFound.module.scss";

export default function FavoritePage() {
	const allFavorites = useSelector(selectFavorites);

	return (
		<>
			{allFavorites.length ? (
				<CardList list={allFavorites} />
			) : (
				<>
					<NotFound title="No favorite cars!" />
					<Link to="/catalog" className={css.link}>
						Back to catalog
					</Link>
				</>
			)}
		</>
	);
}
