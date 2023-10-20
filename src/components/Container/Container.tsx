import { ReactElement } from "react";
import css from "./Container.module.scss";

type Props = { children: ReactElement };

export default function Container({ children }: Props) {
	return <div className={css.container}>{children}</div>;
}
