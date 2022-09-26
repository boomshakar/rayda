import React from "react";
import { usePaystackPayment } from "react-paystack";
import { PaystackProps } from "react-paystack/dist/types";
import Button from "./Button";

type Props = {
	btnText: string;
	amount: number;
};

const PaymentButton = (props: Props) => {
	const config: PaystackProps = {
		reference: new Date().getTime().toString(),
		email: "user@example.com",
		amount: 20000,
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
