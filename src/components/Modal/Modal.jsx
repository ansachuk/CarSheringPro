import { useCallback, useEffect } from "react";
import PropTypes from "prop-types";

import Backdrop from "../Backdrop/Backdrop";
import BackdropCss from "../Backdrop/Backdrop.module.scss";

import icon from "/assets/icons.svg";
import css from "./Modal.module.scss";

export default function Modal({ car, closeModal }) {
	const {
		id,
		img,
		make,
		model,
		year,
		rentalPrice: price,
		address,
		type,
		mileage: carMileage,
		rentalConditions,
		accessories,
		functionalities,
		engineSize,
		fuelConsumption,
		description,
	} = car;

	const [, city, country] = address.split(", ");

	const conditions = rentalConditions.split("\n");

	const mileage = carMileage.toString().length > 3 ? `${carMileage.toString()[0]},${carMileage.toString().slice(1, carMileage.length)}` : carMileage;

	const handlerCloseModal = useCallback(
		e => {
			e.preventDefault();
			if (e.target.classList.contains(BackdropCss.backdropDark) || e.code === "Escape") {
				closeModal();
			}
		},
		[closeModal],
	);

	useEffect(() => {
		const doc = document.documentElement;
		doc.classList.add("overflowHidden");

		window.addEventListener("click", handlerCloseModal);
		window.addEventListener("keydown", handlerCloseModal);
		return () => {
			doc.classList.remove("overflowHidden");
			window.removeEventListener("click", handlerCloseModal);
			window.removeEventListener("keydown", handlerCloseModal);
		};
	}, [handlerCloseModal]);

	return (
		<Backdrop>
			<div className={css.modal}>
				<button className={css.close} onClick={closeModal}>
					<svg width="18" height="18">
						<use href={`${icon}#close`}></use>
					</svg>
				</button>

				<img src={img} className={css.img} title={`${make} ${model}`} />

				<div className={css.titleWrapper}>
					<p>
						{make} <span className={css.model}>{model}</span>, {year}
					</p>
				</div>

				<div>
					<div className={css.dataWrapper}>
						<span className={css.data}>{city}</span>
						<span className={css.data}>{country}</span>
						<span className={css.data}>{`ID:${id}`}</span>
						<span className={css.data}>{`Year:${year}`}</span>
						<span className={css.data}>{`Type:${type}`}</span>
					</div>
					<div className={css.dataWrapper}>
						<span className={css.data}>{`Fuel Consumption:${fuelConsumption}`}</span>
						<span className={css.data}>{`Engine Size:${engineSize}`}</span>
					</div>
				</div>

				<p className={css.desc}>{description}</p>

				<div>
					<p className={css.funcTitle}>Accessories and functionalities:</p>
					<div className={css.dataWrapper}>
						{accessories.map(accessorie => (
							<span className={css.data} key={accessorie}>
								{accessorie}
							</span>
						))}
					</div>
					<div className={css.dataWrapper}>
						{functionalities.map(functionalitie => (
							<span className={css.data} key={functionalitie}>
								{functionalitie}
							</span>
						))}
					</div>
				</div>

				<div>
					<p className={css.funcTitle}>Rental Conditions: </p>
					<div className={css.conditionsWrapper}>
						{conditions.map(cond => {
							if (cond.includes("Minimum age:")) {
								const [minAge, age] = cond.split(":");
								return (
									<span key={cond} className={css.cond}>
										{minAge} : <span className={css.accentSpan}>{age}</span>
									</span>
								);
							}

							return (
								<span className={css.cond} key={cond}>
									{cond}
								</span>
							);
						})}
						<span className={css.cond}>
							Mileage : <span className={css.accentSpan}>{mileage}</span>
						</span>
						<span className={css.cond}>
							Price : <span className={css.accentSpan}>{price}</span>
						</span>
					</div>
				</div>

				<a className={css.rentCar} href="tel:+380730000000">
					Rental Car
				</a>
			</div>
		</Backdrop>
	);
}

Modal.propTypes = {
	car: PropTypes.object.isRequired,
	closeModal: PropTypes.func,
};
