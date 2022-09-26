import Button from "components/buttons/Button";
import CounterButton from "components/buttons/CounterButton";
import ColorCheckbox from "components/checkbox/ColorCheckbox";
import SizeCheckbox from "components/checkbox/SizeCheckbox";
import { useAppDispatch, useAppSelector } from "hooks/redux-hooks.";
import { CartProductModel } from "models/redux-models";
import React from "react";
import {
	changeCartItemColor,
	changeCartItemSize,
	decreaseCartItem,
	increaseCartItem,
	selectCart,
} from "store/cartSlice";
import "styles/cartFeat.scss";

const Cart = () => {
	const { cartItems, total, tax, amount } = useAppSelector(selectCart);
	const dispatch = useAppDispatch();

	const increaseItemQty = (item: CartProductModel) => {
		dispatch(increaseCartItem(item));
	};
	const decreaseItemQty = (item: CartProductModel) => {
		dispatch(decreaseCartItem(item));
	};

	const handleSizeCheckbox = (e: React.ChangeEvent<HTMLInputElement>, item: CartProductModel) => {
		dispatch(changeCartItemSize({ item, value: e.target.value }));
	};
	const handleColorCheckbox = (e: React.ChangeEvent<HTMLInputElement>, item: CartProductModel) => {
		dispatch(changeCartItemColor({ item, value: e.target.value }));
	};

	if (!amount) {
		return (
			<div className="cart_pg-container">
				<h3 className="pg_title">CART</h3>
				<header style={{ textAlign: "center" }}>
					<h2>Your bag is currently empty</h2>
				</header>
			</div>
		);
	}
	return (
		<div className="cart_pg-container">
			<h3 className="pg_title">CART</h3>
			{/* <button onClick={() => dispatch(clearCartItems())}>Remove all items</button> */}
			{cartItems.map((item) => (
				<div className="cart_item">
					<div>
						<div className="item_spec">
							<h2 className="item_title">{item.prdt_title}</h2>
							<h2 className="item_subtitle">{item.prdt_subTitle}</h2>
							<h3 className="item_price">${item.prdt_price}</h3>
							<div className="item_size">
								<p>Size:</p>
								<div className="checkbox">
									{item?.prdt_size_arr.map((prdt_size) => {
										return (
											<SizeCheckbox
												key={prdt_size}
												value={prdt_size}
												checked={prdt_size === item?.prdt_size}
												onChange={(e) => handleSizeCheckbox(e, item)}
											/>
										);
									})}
								</div>
							</div>
							<div className="item_color">
								<p>Color</p>
								<div className="checkbox">
									{item?.prdt_color_arr.map((prdt_size) => {
										return (
											<ColorCheckbox
												key={prdt_size}
												value={prdt_size}
												checked={prdt_size === item?.prdt_color}
												onChange={(e) => handleColorCheckbox(e, item)}
											/>
										);
									})}
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className="qty_control">
							<CounterButton which="add" onClick={() => increaseItemQty(item)} />
							<span>{item.prdt_qty}</span>
							<CounterButton which="sub" onClick={() => decreaseItemQty(item)} />
						</div>
						<div className="item_img">
							<img src="/asset/products/grey-top.png" alt="" />
						</div>
					</div>
				</div>
			))}
			<div className="total_cta">
				<div>
					<p>Tax 21%:&nbsp; </p>
					<p>${tax.toFixed(2)}</p>
				</div>
				<div>
					<p>Quantity:&nbsp; </p>
					<p>{amount}</p>
				</div>
				<div>
					<p>Total:&nbsp; </p>
					<p>${total.toFixed(2)}</p>
				</div>
				<Button value="ORDER" which="lead" onClick={() => {}} />
			</div>
		</div>
	);
};

export default Cart;