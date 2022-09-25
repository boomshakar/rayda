import React from "react";

type Props = {
	which: "add" | "sub";
};

const CounterButton = (props: Props) => {
	return (
		<button className={`cust_btn_couter`}>
			<span>{props.which === "add" ? "+" : "-"} </span>
		</button>
	);
};

export default CounterButton;
