import Button from "components/buttons/Button";
import CounterButton from "components/buttons/CounterButton";
import SizeCheckbox from "components/checkbox/SizeCheckbox";
import React from "react";
import "styles/cartFeat.scss";

type Props = {};

const Cart = (props: Props) => {
	return (
		<div className="cart_pg-container">
			<h3 className="pg_title">CART</h3>
			<div className="cart_item">
				<div>
					<div className="item_spec">
						<h2 className="item_title">Apollo</h2>
						<h2 className="item_subtitle">Running Shirt</h2>
						<h3 className="item_price">$50.00</h3>
						<div className="item_size">
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
						<div className="item_color">
							<p>Color</p>
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
					</div>
				</div>
				<div>
					<div className="qty_control">
						<CounterButton which="add" />
						<span>1</span>
						<CounterButton which="sub" />
					</div>
					<div className="item_img">
						<img src="/asset/products/grey-top.png" alt="" />
					</div>
				</div>
			</div>
			<div className="cart_item">
				<div>
					<div className="item_spec">
						<h2 className="item_title">Apollo</h2>
						<h2 className="item_subtitle">Running Shirt</h2>
						<h3 className="item_price">$50.00</h3>
						<div className="item_size">
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
						<div className="item_color">
							<p>Color</p>
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
					</div>
				</div>
				<div>
					<div className="qty_control">
						<CounterButton which="add" />
						<span>1</span>
						<CounterButton which="sub" />
					</div>
					<div className="item_img">
						<img src="/asset/products/grey-top.png" alt="" />
					</div>
				</div>
			</div>
			<div className="total_cta">
				<div>
					<p>Tax 21%:&nbsp; </p>
					<p>$42.00</p>
				</div>
				<div>
					<p>Quantity:&nbsp; </p>
					<p>3</p>
				</div>
				<div>
					<p>Total:&nbsp; </p>
					<p>$200.00</p>
				</div>
				<Button value="ORDER" which="lead" onClick={() => {}} />
			</div>
		</div>
	);
};

export default Cart;
