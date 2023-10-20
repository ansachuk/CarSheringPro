import { ReactNode } from "react";
import css from "./Backdrop.module.scss";

type Props = {
	type: "dark" | "light";
	children: ReactNode;
};

export default function Backdrop({ children, type = "dark" }: Props) {
	const className = type === "dark" ? css.backdropDark : css.backdropLight;
	return <div className={className}>{children}</div>;
}
