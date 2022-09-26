import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import cartReducer from "./cartSlice";
import productsReducer from "./productsSlice";
import uiStateReducer from "./uiSlice";

export const store = configureStore({
	reducer: {
		cart: cartReducer,
		products: productsReducer,
		ui: uiStateReducer,
		[apiSlice.reducerPath]: apiSlice.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
