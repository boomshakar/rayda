import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productsReducer from "./productsSlice";
import uiStateReducer from "./uiSlice";

export const store = configureStore({
	reducer: {
		cart: cartReducer,
		products: productsReducer,
		ui: uiStateReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
