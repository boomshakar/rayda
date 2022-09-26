import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartArrayModel, CartProductModel, ProductItemModel } from "models/redux-models";
import { RootState } from "store";
// import { defaultCartItem } from "utils/produtListConst";

const initialState: CartArrayModel = {
	cartItems: [],
	amount: 0,
	// cartItems: defaultCartItem,
	// amount: defaultCartItem.length,
	total: 0,
	tax: 0,
	isLoading: false,
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		clearCartItems: (state) => {
			state.amount = 0;
			state.cartItems = [];
			state.isLoading = false;
			state.tax = 0;
			state.total = 0;
		},
		addItemToCart: (state, action: PayloadAction<ProductItemModel>) => {
			const { payload } = action;
			const itemExists = state.cartItems.find((item) => item.id === payload.id);
			if (itemExists) {
				return state;
			} else {
				const defaultItem = {
					...payload,
					prdt_qty: 1,
				};
				state.cartItems.push(defaultItem);
			}
		},
		removeCartItem: (state, action: PayloadAction<CartProductModel>) => {
			const { payload } = action;
			state.cartItems = state.cartItems.filter((item) => item.id !== payload.id);
		},
		increaseCartItem: (state, action: PayloadAction<CartProductModel>) => {
			const { payload } = action;
			const cartItem = state.cartItems.find((item) => item.id === payload.id);
			if (cartItem) {
				cartItem.prdt_qty = cartItem.prdt_qty + 1;
			}
		},
		decreaseCartItem: (state, action: PayloadAction<CartProductModel>) => {
			const { payload } = action;
			const cartItem = state.cartItems.find((item) => item.id === payload.id);
			if (cartItem) {
				cartItem.prdt_qty = cartItem.prdt_qty - 1;
			}
		},
		calculateTotal: (state) => {
			let itemqty = 0;
			let itemPrice = 0;
			state.cartItems.forEach((cartItem) => {
				itemqty += cartItem.prdt_qty;
				itemPrice += cartItem.prdt_qty * cartItem.prdt_price;
			});
			let tax = (21 / 100) * itemPrice;
			let totalWithTax = itemPrice + tax;

			state.amount = itemqty;
			state.tax = tax;
			state.total = totalWithTax;
		},
		changeCartItemSize: (state, action) => {
			const { payload } = action;
			const cartItem = state.cartItems.find((item) => item.id === payload.item.id);
			if (cartItem) {
				cartItem.prdt_size = payload.value;
			}
		},
		changeCartItemColor: (state, action) => {
			const { payload } = action;
			const cartItem = state.cartItems.find((item) => item.id === payload?.item.id);
			if (cartItem) {
				cartItem.prdt_color = payload.value;
			}
		},
	},
});

export const {
	addItemToCart,
	calculateTotal,
	clearCartItems,
	decreaseCartItem,
	increaseCartItem,
	removeCartItem,
	changeCartItemSize,
	changeCartItemColor,
} = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
