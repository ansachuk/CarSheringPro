import css from "./Footer.module.scss";

export default function Footer() {
	return (
		<footer className={css.footer}>
			<a className={css.author} target="_blank" rel="noopener noreferrer" href="https://github.com/ansachuk">
				by @ansachuk
			</a>
		</footer>
	);
}
