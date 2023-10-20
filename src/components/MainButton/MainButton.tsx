import PropTypes from "prop-types";
import css from "./MainButton.module.scss";

export default function MainButton({ type = "button", onClick, title, disabled = false, size = "small" }) {
	return (
		<button type={type} disabled={disabled} onClick={onClick} className={size === "big" ? css.mainButtonBig : css.mainButton}>
			{title}
		</button>
	);
}

MainButton.propTypes = {
	type: PropTypes.string,
	title: PropTypes.string.isRequired,
	size: PropTypes.string,
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
};
