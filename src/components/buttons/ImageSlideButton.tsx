import React from "react";

type Props = {
	which: "prev" | "next";
	onClick?: () => void;
};

const ImageSlideButton = ({ which, onClick = () => {} }: Props) => {
	return (
		<button className={`cust_btn_img_slide`} onClick={onClick}>
			{which === "prev" ? (
				<img src="/asset/Icon/arrow-left-icon.svg" alt="" />
			) : (
				<img src="/asset/Icon/arrow-right-icon.svg" alt="" />
			)}
		</button>
	);
};

export default ImageSlideButton;
