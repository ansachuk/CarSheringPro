import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Select from "react-select";

import { selectBrands } from "../../toolkit/selectors/carsSelectors";
import { setFilter } from "../../toolkit/slices/carsSlice";

import { AppDispatch, IFilter } from "../../@types/reduxTypes";
import { milleage, prices } from "../../utils/utils";

import css from "./Filter.module.scss";

type Option = {
	value: string;
	label: string;
};

export default function Filter() {
	const disp = useDispatch<AppDispatch>();
	const brands = useSelector(selectBrands);
	const [searchParams, setSearchParams] = useSearchParams();
	const params = useMemo(() => Object.fromEntries([...searchParams]), [searchParams]);

	const { brand, priceTo, mileageFrom, mileageTo } = params as unknown as IFilter;

	useEffect(() => {
		disp(setFilter({ ...params }));
	}, [disp, params]);

	return (
		<form>
			<label>
				Car brand
				<Select
					isClearable
					options={brands.map(brand => {
						return { value: brand, label: brand };
					})}
					name="brand"
					placeholder="Choose a brand"
					value={brand && { value: brand, label: brand }}
					onChange={opt => {
						if (opt) {
							setSearchParams({
								...params,
								brand: (opt as Option).value,
							});
						} else {
							setSearchParams({
								...params,
								brand: "",
							});
						}
					}}
				/>
			</label>

			<label>
				Price/ 1 hour
				<Select
					isClearable={true}
					options={prices.map((_, index) => {
						const currentIndex = index + 3;
						const num = currentIndex * 10;
						return { value: num.toString(), label: num.toString() };
					})}
					getOptionLabel={opt => `To ${(opt as Option).label}$`}
					name="priceTo"
					placeholder="To $"
					value={priceTo && { value: priceTo, label: priceTo }}
					onChange={opt => {
						if (opt) {
							setSearchParams({
								...params,
								priceTo: (opt as Option).value,
							});
						} else {
							setSearchParams({
								...params,
								priceTo: "",
							});
						}
					}}
				/>
			</label>

			<div className={css.milleageWrapper}>
				<label>
					From
					<Select
						isClearable={true}
						options={milleage.map((_, index) => {
							const currentIndex = index + 7;
							const num = currentIndex * 500;
							return { value: num.toString(), label: num.toString() };
						})}
						getOptionLabel={opt => `From ${(opt as Option).label}m`}
						name="milleageFrom"
						placeholder="From"
						value={mileageFrom && { value: mileageFrom, label: mileageFrom }}
						onChange={opt => {
							if (opt) {
								setSearchParams({
									...params,
									mileageFrom: (opt as Option).value,
								});
							} else {
								setSearchParams({
									...params,
									mileageFrom: "",
								});
							}
						}}
					/>
				</label>
				<label>
					To
					<Select
						isClearable={true}
						options={milleage.map((_, index) => {
							const currentIndex = index + 7;
							const num = currentIndex * 500;
							return { value: num.toString(), label: num.toString() };
						})}
						getOptionLabel={opt => `To ${(opt as Option).label}m`}
						name="milleageTo"
						placeholder="To"
						value={mileageTo && { value: mileageTo, label: mileageTo }}
						onChange={opt => {
							if (opt) {
								setSearchParams({
									...params,
									mileageTo: (opt as Option).value,
								});
							} else {
								setSearchParams({
									...params,
									mileageTo: "",
								});
							}
						}}
					/>
				</label>
			</div>
		</form>
	);
}
