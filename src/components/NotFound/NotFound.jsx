import { Link } from "react-router-dom";

import notFound from "/assets/notFound.png";

import css from "./NotFound.module.scss";

export default function NotFound() {
	return (
		<div className={css.wrapper}>
			<img className={css.img} width="550" height="550" src={notFound} />
			<p className={css.title}>No favorite cars!</p>

			<Link to="/catalog" className={css.link}>
				Back to catalog
			</Link>
		</div>
	);
}
