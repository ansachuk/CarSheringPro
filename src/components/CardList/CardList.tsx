import CardItem from "../CardItem/CardItem";

import { Car } from "../../@types/types";

import css from "./CardList.module.scss";

type Props = { list: Car[] };

export default function CardList({ list }: Props) {
	return (
		<ul className={css.list}>
			{list.map(car => (
				<CardItem key={car.id} car={car} />
			))}
		</ul>
	);
}
