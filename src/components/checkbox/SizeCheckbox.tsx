import React from "react";

type Props = {
	value: string;
	checked: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SizeCheckbox = ({ value, checked, onChange = () => {} }: Props) => {
	return (
		<div className="size-checkbox size">
			{/* <span></span> */}
			<label className="container" id="color-checkbox" htmlFor="radio-g">
				<input checked={checked} name="color" value={value} id={value} type="checkbox" onChange={onChange} />
				<span className="checkmark">{value}</span>
			</label>
		</div>
	);
};

export default SizeCheckbox;
