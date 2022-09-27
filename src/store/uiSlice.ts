import { createSlice } from "@reduxjs/toolkit";
import { UiStateModel } from "models/redux-models";
import { RootState } from "store";

const initialState: UiStateModel = {
	cartDrawer: false,
	currencyDrawer: false,
	ngn_xchg_rate: 0,
	currency_val: "USD",
	currency_arr: ["USD", "EUR", "JPY"],
};

export const uiStateSlice = createSlice({
	name: "ui",
	initialState,
	reducers: {
		toggle: (state) => {
			state.cartDrawer = !state.cartDrawer;
		},
		toggleCurrDrawer: (state) => {
			state.currencyDrawer = !state.currencyDrawer;
		},
		changeCurrencyVal: (state, action) => {
			const { payload } = action;
			state.currency_val = payload;
		},
		updateNgnRate: (state, action: { payload: number }) => {
			const { payload } = action;
			state.ngn_xchg_rate = payload;
		},
	},
});

export const { toggle, toggleCurrDrawer, changeCurrencyVal, updateNgnRate } = uiStateSlice.actions;
export const selectCartDrawer = (state: RootState) => state.ui.cartDrawer;
export const selectUiState = (state: RootState) => state.ui;

export default uiStateSlice.reducer;
