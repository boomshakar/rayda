import React from "react";

type Props = {
	value: string;
	checked: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const ColorCheckbox = ({ value, checked, onChange = () => {} }: Props) => {
	return (
		<div className="size-checkbox color">
			<label className="container" id="color-checkbox" htmlFor="radio-g">
				<input checked={checked} name="color" value={value} id={value} type="checkbox" onChange={onChange} />
				<span className="checkmark" style={{ backgroundColor: value }}></span>
			</label>
		</div>
	);
};

export default ColorCheckbox;
