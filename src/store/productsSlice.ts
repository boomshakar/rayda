import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductItemModel, ProductListModel } from "models/redux-models";
import { RootState } from "store";

const initialState: ProductListModel = {
	list: [],
	isLoading: false,
};

export const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		startFetch: (state) => {
			state.isLoading = true;
		},
		saveproducts: (state, action: PayloadAction<ProductItemModel[]>) => {
			const { payload } = action;
			state.list = payload;
			state.isLoading = false;
		},
		updateProductCurrency: (state, action) => {
			const { payload } = action;
			state.list.forEach((prdt_item) => {
				prdt_item.prdt_price = prdt_item.prdt_price * Number(payload);
			});

			return state;
		},
	},
});

export const { startFetch, saveproducts, updateProductCurrency } = productSlice.actions;
export const selectProductList = (state: RootState) => state.products.list;
export const selectIsProductListLoading = (state: RootState) => state.products.isLoading;

export default productSlice.reducer;
