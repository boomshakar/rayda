import React from "react";
import "styles/cartFeat.scss";
import Button from "./buttons/Button";
import CounterButton from "./buttons/CounterButton";
import SizeCheckbox from "./checkbox/SizeCheckbox";

type Props = {
	visible: Boolean;
};

const CartPopUp = (props: Props) => {
	return (
		<div className={`cart_popup-contain${props.visible ? " w-open" : ""}`}>
			<div className="cart_items">
				<div className="cart_item">
					<div className="item_title">
						<span>My Bag &nbsp;</span>
						<span>3 items</span>
					</div>
					<div className="item_info">
						<div className="item_spec">
							<div className="item_title">Apollo Running Shirt</div>
							<div className="item_price">$50.00</div>
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
					<div className="total">
						<span>Total</span>
						<span>$200.00</span>
					</div>
					<div className="cta">
						<Button value="VIEW BAG" which="outline" />
						<Button value="CHECK OUT" which="lead" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartPopUp;
