import css from "./Backdrop.module.scss";
import PropTypes from "prop-types";

export default function Backdrop({ children, type = "dark" }) {
	const className = type === "dark" ? css.backdropDark : css.backdropLight;
	return <div className={className}>{children}</div>;
}

Backdrop.propTypes = {
	children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
	type: PropTypes.string,
};
