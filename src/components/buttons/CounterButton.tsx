import React from "react";

type Props = {
	which: "add" | "sub";
	onClick: () => void;
};

const CounterButton = (props: Props) => {
	return (
		<button className={`cust_btn_couter`} onClick={props.onClick}>
			<span>{props.which === "add" ? "+" : "-"} </span>
		</button>
	);
};

export default CounterButton;
