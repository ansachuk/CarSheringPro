import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Select from "react-select";

import { selectBrands } from "../../toolkit/selectors/carsSelectors";
import { prices } from "../../utils/utils";

export default function Filter() {
	const brands = useSelector(selectBrands);
	const [searchParams, setSearchParams] = useSearchParams();
	const params = useMemo(() => Object.fromEntries([...searchParams]), [searchParams]);
	// const { brand = "", priceTo = "", mileageFrom, mileageTo } = params;
	const { brand, priceTo } = params;

	return (
		<form>
			<label>
				Car brand
				<Select
					options={brands.map(brand => {
						return { value: brand, label: brand, id: brand };
					})}
					name="brand"
					placeholder="Enter the text"
					value={brand && { value: brand, label: brand, id: brand }}
					onChange={opt =>
						setSearchParams({
							...params,
							brand: opt.value,
						})
					}
				/>
			</label>

			<label>
				Price/ 1 hour
				<Select
					options={prices.map((_, index) => {
						const num = index + 3;
						return { value: num * 10, label: num * 10 };
					})}
					getOptionLabel={option => `To ${option.label}$`}
					name="priceTo"
					placeholder="To $"
					value={priceTo && { value: priceTo, label: priceTo }}
					onChange={opt =>
						setSearchParams({
							...params,
							priceTo: opt.value,
						})
					}
				/>
			</label>
		</form>
	);
}
