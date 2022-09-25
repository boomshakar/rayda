import { createSlice } from "@reduxjs/toolkit";
import { CartArrayModel } from "models/redux-models";

const initialState: CartArrayModel = {
	cartItems: [],
	amount: 0,
	total: 0,
	isLoading: true,
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {},
});

export default cartSlice.reducer;
