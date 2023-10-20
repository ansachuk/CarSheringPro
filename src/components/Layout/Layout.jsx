import { Suspense } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

import Container from "../Container/Container";
import Footer from "./Footer/Footer";
import Loader from "../Loader/Loader";

import css from "./Layout.module.scss";

export default function Layout() {
	return (
		<>
			<header className={css.header}>
				<Container>
					<div className={css.wrapper}>
						<Link className={css.logo} to="/">
							CarShering
						</Link>
						<nav>
							<NavLink to="/">Home</NavLink>
							<NavLink to="/catalog">Catalog</NavLink>
							<NavLink to="/favorites">Favorites</NavLink>
						</nav>
					</div>
				</Container>
			</header>
			<main>
				<Container>
					<Suspense fallback={<Loader />}>
						<Outlet />
					</Suspense>
				</Container>
			</main>
			<Footer />
		</>
	);
}
