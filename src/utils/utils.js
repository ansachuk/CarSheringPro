export const createDataArray = arr =>
	arr.reduce((acc, el) => {
		if (acc.includes(el.make)) return acc;
		acc.push(el.make);

		return acc;
	}, []);

export const prices = new Array(18).fill("");
