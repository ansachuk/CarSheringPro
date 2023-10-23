import notFound from "/assets/notFound.png";

import css from "./NotFound.module.scss";

type Props = { title: string };

export default function NotFound({ title }: Props) {
	return (
		<div className={css.wrapper}>
			<p className={css.title}>{title}</p>
			<img className={css.img} width="500" height="500" src={notFound} />
		</div>
	);
}
