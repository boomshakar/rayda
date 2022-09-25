import { createSlice } from "@reduxjs/toolkit";
import { UiStateModel } from "models/redux-models";
import { RootState } from "store";

const initialState: UiStateModel = {
	cartDrawer: false,
};

export const uiStateSlice = createSlice({
	name: "ui",
	initialState,
	reducers: {
		toggle: (state) => {
			state.cartDrawer = !state.cartDrawer;
		},
	},
});

export const { toggle } = uiStateSlice.actions;
export const selectCartDrawer = (state: RootState) => state.ui.cartDrawer;

export default uiStateSlice.reducer;
