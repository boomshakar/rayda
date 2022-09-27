import React from "react";
type Props = {
	which: "lead" | "outline";
	value: string;
	onClick: () => void;
};

const Button = ({ which, value, onClick = () => {} }: Props) => {
	return (
		<button className={`cust_btn ${which}`} onClick={onClick}>
			<span>{value}</span>
		</button>
	);
};

export default Button;
