import { Dispatch, SetStateAction } from "react";
import css from "./MainButton.module.scss";

type Props = {
	type?: "button" | "submit";
	title: string;
	size: string;
	disabled?: boolean;
	onClick: Dispatch<SetStateAction<boolean>>;
};

export default function MainButton({ type = "button", onClick, title, disabled = false, size = "small" }: Props) {
	return (
		<button type={type} disabled={disabled} onClick={() => onClick(true)} className={size === "big" ? css.mainButtonBig : css.mainButton}>
			{title}
		</button>
	);
}
