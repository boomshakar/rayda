import { useAppDispatch, useAppSelector } from "hooks/redux-hooks.";
import { CartProductModel } from "models/redux-models";
import React from "react";
import { useNavigate } from "react-router-dom";
import { decreaseCartItem, increaseCartItem, removeCartItem, selectCart } from "store/cartSlice";
import { selectCartDrawer, toggle } from "store/uiSlice";
import "styles/cartFeat.scss";
import Button from "./buttons/Button";
import CounterButton from "./buttons/CounterButton";
import SizeCheckbox from "./checkbox/SizeCheckbox";

const CartPopUp = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const cartDrawerVisibility = useAppSelector(selectCartDrawer);
	const { isLoading, cartItems, total, amount } = useAppSelector(selectCart);

	const handleViewBag = () => {
		navigate("/cart");
		dispatch(toggle());
	};

	const increaseItemQty = (item: CartProductModel) => {
		dispatch(increaseCartItem(item));
	};
	const decreaseItemQty = (item: CartProductModel) => {
		if (item.prdt_qty === 1) {
			dispatch(removeCartItem(item));
			return;
		}
		dispatch(decreaseCartItem(item));
	};

	return (
		<div className={`cart_popup-contain${cartDrawerVisibility ? " w-open" : ""}`}>
			<div className="cart_items">
				{!amount ? (
					<header style={{ textAlign: "center" }}>
						<h3>Your bag is currently empty</h3>
					</header>
				) : (
					cartItems.map((item) => (
						<div className="cart_item" key={item.id}>
							<div className="item_title">
								<span>My Bag &nbsp;</span>
								<span>{amount} items</span>
							</div>
							<div className="item_info">
								<div className="item_spec">
									<div className="item_title">{`${item.prdt_title} ${item.prdt_subTitle}`}</div>
									<div className="item_price">${item.prdt_price.toFixed(2)}</div>
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
									<CounterButton which="add" onClick={() => increaseItemQty(item)} />
									<span>{item.prdt_qty}</span>
									<CounterButton which="sub" onClick={() => decreaseItemQty(item)} />
								</div>
								<div className="item_img">
									<img src={item.prdt_img} alt="" />
								</div>
							</div>
						</div>
					))
				)}
				<div className="total_cta">
					<div className="total">
						<span>Total</span>
						<span>${total.toFixed(2)}</span>
					</div>
					<div className="cta">
						<Button onClick={handleViewBag} value="VIEW BAG" which="outline" />
						<Button onClick={() => {}} value="CHECK OUT" which="lead" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartPopUp;
