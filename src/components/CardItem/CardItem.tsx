import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import { selectFavorites } from "../../toolkit/selectors/carsSelectors";
import { addToFavorite, removeFromFavorite } from "../../toolkit/slices/carsSlice";

import Modal from "../Modal/Modal";
import MainButton from "../MainButton/MainButton";

import icons from "/assets/icons.svg";
import css from "./CardItem.module.scss";

export default function CardItem({ car }) {
	const disp = useDispatch();
	const allFavorites = useSelector(selectFavorites);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const { id, img, make, model, year, rentalPrice: price, address, rentalCompany, type, mileage, functionalities } = car;

	const [, city, country] = address.split(", ");
	const functionality = functionalities[0];

	const index = allFavorites.findIndex(car => car.id === id);
	const icon = index !== -1 ? `${icons}#heart` : `${icons}#emptyHeart`;

	const add = () => disp(addToFavorite(car));
	const remove = () => disp(removeFromFavorite(id));

	const onClick = index !== -1 ? remove : add;

	return (
		<li className={css.card}>
			<svg onClick={onClick} className={css.icon} width="18" height="18">
				<use href={icon}></use>
			</svg>

			<img src={img} className={css.img} title={`${make} ${model}`} />

			<div className={css.wrapper}>
				<div className={css.titleWrapper}>
					<p>
						{make} <span className={css.model}>{model}</span>, {year}
					</p>
					<p className={css.price}>{`${price}`}</p>
				</div>

				<div>
					<div className={css.dataWrapper}>
						<span className={css.data}>{city}</span>
						<span className={css.data}>{country}</span>
						<span className={css.data}>{rentalCompany}</span>
					</div>
					<div className={css.dataWrapper}>
						<span className={css.data}>{type}</span>
						<span className={css.data}>{model}</span>
						<span className={css.data}>{mileage}</span>
						<span className={css.data}>{functionality}</span>
					</div>
				</div>
			</div>
			<MainButton onClick={setIsModalOpen} title="Learn More" size="big" />
			{isModalOpen && <Modal car={car} closeModal={() => setIsModalOpen(false)} />}
		</li>
	);
}

CardItem.propTypes = {
	car: PropTypes.object.isRequired,
};
