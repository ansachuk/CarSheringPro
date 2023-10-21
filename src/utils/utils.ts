import { Car } from "../@types/types";

export const createDataArray = (arr: Array<Car>) =>
	arr.reduce((acc, el) => {
		if (acc.includes(el.make)) return acc;
		acc.push(el.make);

		return acc;
	}, [] as Array<string>);

export const prices: Readonly<Array<string>> = new Array(18).fill("");

export const milleage: Readonly<Array<string>> = new Array(10).fill("");

export const filterCars = (arr: Car[]) => arr;
