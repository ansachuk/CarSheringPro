import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { Car } from "../../@types/types";
import instance from "../instance";

const getAll = createAsyncThunk("cars/getAll", async (_, { rejectWithValue }): Promise<Array<Car>> => {
	try {
		const { data } = await instance.get("advert");
		return data;
	} catch (e) {
		throw rejectWithValue((e as AxiosError).message);
	}
});

export { getAll };
