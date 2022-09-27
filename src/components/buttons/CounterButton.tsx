import React from "react";

type Props = {
	which: "add" | "sub";
	onClick: () => void;
};

const CounterButton = ({ which, onClick = () => {} }: Props) => {
	return (
		<button className={`cust_btn_couter`} onClick={onClick}>
			{which === "add" ? (
				<img src="/asset/Icon/plus-icon.svg" alt="" />
			) : (
				<img src="/asset/Icon/minus-icon.svg" alt="" />
			)}
		</button>
	);
};

export default CounterButton;
