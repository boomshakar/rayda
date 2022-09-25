import React from "react";
import Button from "./buttons/Button";
import SizeCheckbox from "./checkbox/SizeCheckbox";

type Props = {};

const ProductDetailInfo = (props: Props) => {
	return (
		<div className="product-info">
			<div className="title">
				<h1>Apollo</h1>
				<h1>Running Short</h1>
			</div>
			<div className="product_size">
				<p>Size:</p>
				<div className="checkbox">
					<SizeCheckbox
						value="XS"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => console.log({ e: e.target.value })}
					/>
					<SizeCheckbox
						value="S"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => console.log({ e: e.target.value })}
					/>
					<SizeCheckbox
						value="M"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => console.log({ e: e.target.value })}
					/>
					<SizeCheckbox
						value="L"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => console.log({ e: e.target.value })}
					/>
				</div>
			</div>
			<div className="product_color">
				<p>Color:</p>
				<div className="checkbox">
					<SizeCheckbox
						value="XS"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => console.log({ e: e.target.value })}
					/>
					<SizeCheckbox
						value="S"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => console.log({ e: e.target.value })}
					/>
				</div>
			</div>
			<div className="product_price">
				<p>PRICE:</p>
				<p>$50.00</p>
			</div>
			<div className="product_cta">
				<Button onClick={() => {}} value="ADD TO CART" which="lead" />
			</div>
			<div className="product_details">
				<p>
					Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and
					party dresses from all your favorite brands.
				</p>
			</div>
		</div>
	);
};

export default ProductDetailInfo;
