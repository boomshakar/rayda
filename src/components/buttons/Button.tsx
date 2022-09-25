import React from "react";
import { VoidExpression } from "typescript";

type Props = {
	which: "lead" | "outline";
	value: string;
	onClick: () => void;
};

const Button = (props: Props) => {
	return (
		<button className={`cust_btn ${props.which}`} onClick={props.onClick}>
			<span>{props.value}</span>
		</button>
	);
};

export default Button;
