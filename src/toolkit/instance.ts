import axios from "axios";

const baseURL = "https://6508416c56db83a34d9c01ad.mockapi.io/";

const instance = axios.create({
	baseURL,
	headers: {
		"Content-Type": "application/json",
	},
});

export default instance;
