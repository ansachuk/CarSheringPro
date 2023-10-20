import { createAsyncThunk } from "@reduxjs/toolkit";

import instance from "../instance";

const getAll = createAsyncThunk("cars/getAll", async (_, { rejectWithValue }) => {
	try {
		const { data } = await instance.get("advert");
		return data;
	} catch (e) {
		return rejectWithValue(e.response.data.message);
	}
});

export { getAll };
