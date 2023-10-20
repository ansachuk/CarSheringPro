import { ReactNode } from "react";
import css from "./Backdrop.module.scss";
import PropTypes from "prop-types";

type Props = {
	type: "dark" | "light";
	children: ReactNode;
};

export default function Backdrop({ children, type = "dark" }: Props) {
	const className = type === "dark" ? css.backdropDark : css.backdropLight;
	return <div className={className}>{children}</div>;
}

Backdrop.propTypes = {
	children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
	type: PropTypes.string,
};
