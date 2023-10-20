import { DotPulse } from "@uiball/loaders";

import Backdrop from "../Backdrop/Backdrop";

export default function Loader() {
	return (
		<Backdrop type="light">
			<DotPulse />
		</Backdrop>
	);
}
