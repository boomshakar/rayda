import React from "react";

type Props = {
	which: "lead" | "outline";
	value: string;
};

const Button = (props: Props) => {
	return (
		<button className={`cust_btn ${props.which}`}>
			<span>{props.value}</span>
		</button>
	);
};

export default Button;
