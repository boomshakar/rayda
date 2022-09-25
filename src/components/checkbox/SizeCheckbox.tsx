import React from "react";

type Props = {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SizeCheckbox = (props: Props) => {
	return (
		<div className="size-checkbox">
			{/* <span></span> */}
			<label className="container" id="color-checkbox" htmlFor="radio-g">
				<input name="color" value={props.value} id="color1" type="radio" onChange={props.onChange} />
				<span className="checkmark">{props.value}</span>
			</label>
		</div>
	);
};

export default SizeCheckbox;
// create custom checkbox react typescript?
