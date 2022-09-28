import { useAppDispatch, useAppSelector } from "hooks/redux-hooks.";
import React from "react";
import { usePaystackPayment } from "react-paystack";
import { PaystackProps } from "react-paystack/dist/types";
import { clearCartItems } from "store/cartSlice";
import { selectUiState } from "store/uiSlice";
import Button from "./Button";

type Props = {
	btnText: string;
	amount: number;
	onClick?: () => void;
};

const PaymentButton = ({ btnText, amount, onClick = () => {} }: Props) => {
	const { ngn_xchg_rate } = useAppSelector(selectUiState);

	const dispatch = useAppDispatch();

	const fetchNewAmountXchg = () => {
		const amountInKobo: number = Number(Number(ngn_xchg_rate).toFixed(2)) * 100;
		return amountInKobo;
	};

	const config: PaystackProps = {
		reference: new Date().getTime().toString(),
		email: "user@example.com",
		amount: fetchNewAmountXchg(),
		publicKey: "pk_test_7ad4118026dde176163b79afb1aed42811acbbda",
		firstname: "cool",
		lastname: "story",
		// currency: "USD",
	};
	const initializePayment = usePaystackPayment(config);
	const onSuccess = (reference: void) => {
		// Implementation for whatever you want to do with reference and after success call.
		console.log(reference);
		dispatch(clearCartItems());
	};

	const onClose = () => {
		// implementation for  whatever you want to do when the Paystack dialog closed.
		console.log("closed");
	};
	const makePayment = () => {
		onClick();
		amount && initializePayment(onSuccess, onClose);
	};
	return <Button value={btnText} which="lead" onClick={makePayment} />;
};

export default PaymentButton;
