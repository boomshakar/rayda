import React from "react";

type Props = {
	value: string;
	checked: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SizeCheckbox = (props: Props) => {
	return (
		<div className="size-checkbox size">
			{/* <span></span> */}
			<label className="container" id="color-checkbox" htmlFor="radio-g">
				<input
					// defaultChecked={props.checked}
					checked={props.checked}
					name="color"
					// defaultValue={props.value}
					value={props?.value}
					id={props?.value}
					type="checkbox"
					onChange={props.onChange}
				/>
				<span className="checkmark">{props.value}</span>
			</label>
		</div>
	);
};

export default SizeCheckbox;
// create custom checkbox react typescript?
