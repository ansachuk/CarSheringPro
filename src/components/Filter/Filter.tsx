import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Select from "react-select";

import { selectBrands } from "../../toolkit/selectors/carsSelectors";
import { prices } from "../../utils/utils";
import { AppDispatch, IFilter } from "../../@types/reduxTypes";
import { setFilter } from "../../toolkit/slices/carsSlice";

type Option = {
	value: string;
	label: string;
};

export default function Filter() {
	const disp = useDispatch<AppDispatch>();
	const brands = useSelector(selectBrands);
	const [searchParams, setSearchParams] = useSearchParams();
	const params = useMemo(() => Object.fromEntries([...searchParams]), [searchParams]);
	// const { brand = "", priceTo = "", mileageFrom, mileageTo } = params;
	const { brand, priceTo } = params as unknown as IFilter;

	useEffect(() => {
		disp(setFilter({ ...params }));
	}, [disp, params]);

	return (
		<form>
			<label>
				Car brand
				<Select
					options={brands.map(brand => {
						return { value: brand, label: brand };
					})}
					name="brand"
					placeholder="Choose a brand"
					value={brand && { value: brand, label: brand }}
					onChange={opt =>
						setSearchParams({
							...params,
							brand: (opt as Option).value,
						})
					}
				/>
			</label>

			<label>
				Price/ 1 hour
				<Select
					options={prices.map((_, index) => {
						const currentIndex = index + 3;
						const num = currentIndex * 10;
						return { value: num.toString(), label: num.toString() };
					})}
					getOptionLabel={opt => `To ${(opt as Option).label}$`}
					name="priceTo"
					placeholder="To $"
					value={priceTo && { value: priceTo, label: priceTo }}
					onChange={opt =>
						setSearchParams({
							...params,
							priceTo: (opt as Option).value,
						})
					}
				/>
			</label>
		</form>
	);
}
