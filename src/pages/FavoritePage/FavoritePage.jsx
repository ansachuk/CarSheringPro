import { useSelector } from "react-redux";

import { selectFavorites } from "../../toolkit/selectors/carsSelectors";

import CardList from "../../components/CardList/CardList";
import NotFound from "../../components/NotFound/NotFound";

export default function FavoritePage() {
	const allFavorites = useSelector(selectFavorites);
	return <>{allFavorites.length ? <CardList list={allFavorites} /> : <NotFound />}</>;
}
