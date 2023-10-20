import PropTypes from "prop-types";

import CardItem from "../CardItem/CardItem";

import css from "./CardList.module.scss";

export default function CardList({ list }) {
	return (
		<ul className={css.list}>
			{list.map(car => (
				<CardItem key={car.id} car={car} />
			))}
		</ul>
	);
}

CardList.propTypes = {
	list: PropTypes.array.isRequired,
};
