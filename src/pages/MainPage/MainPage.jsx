import { Link } from "react-router-dom";

import carImg from "/assets/car.jpg";

import css from "./MainPage.module.scss";

export default function MainPage() {
	return (
		<div className={css.wrapper}>
			<div>
				<h1 className={css.title}>Easy to rent your car!</h1>
				<p className={css.desc}>
					We have a wide selection of cars to choose from, including economy cars, SUVs, and luxury cars in Ukraine 🇺🇦. We also offer a variety of
					rental options to fit your needs, including short-term rentals, long-term rentals, and one-way rentals.
				</p>
				<Link to="/catalog" className={css.link}>
					Go to catalog
				</Link>
			</div>
			<img src={carImg} className={css.img} width="400" height="400" />
		</div>
	);
}
