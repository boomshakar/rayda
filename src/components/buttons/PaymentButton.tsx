import { useAppSelector } from "hooks/redux-hooks.";
import React from "react";
import { usePaystackPayment } from "react-paystack";
import { PaystackProps } from "react-paystack/dist/types";
import { selectUiState } from "store/uiSlice";
import Button from "./Button";

type Props = {
	btnText: string;
	amount: number;
};

const PaymentButton = (props: Props) => {
	const { ngn_xchg_rate } = useAppSelector(selectUiState);

	const fetchNewAmountXchg = () => {
		// const newAmountRate = total * ngn_xchg_rate;
		// const amountInKobo = Number(newAmountRate.toFixed(2)) * 100;
		console.log({ ngn_xchg_rate });
		const amountInKobo: number = Number(Number(ngn_xchg_rate).toFixed(2)) * 100;
		return amountInKobo;
	};

	console.log({ h: fetchNewAmountXchg() });

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
	};

	const onClose = () => {
		// implementation for  whatever you want to do when the Paystack dialog closed.
		console.log("closed");
	};

	return <Button value={props.btnText} which="lead" onClick={() => initializePayment(onSuccess, onClose)} />;
};

export default PaymentButton;
