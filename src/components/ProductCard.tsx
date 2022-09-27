import { useAppDispatch, useAppSelector } from "hooks/redux-hooks.";
import { ProductItemModel } from "models/redux-models";
import React from "react";
import { Link } from "react-router-dom";
import { addItemToCart } from "store/cartSlice";
import { selectUiState } from "store/uiSlice";
import "styles/productCard.scss";

const ProductCard = (props: { product: ProductItemModel }) => {
	const dispatch = useAppDispatch();

	const { currency_val } = useAppSelector(selectUiState);

	let currencyIcon: string;

	switch (currency_val) {
		case "USD":
			currencyIcon = "$";
			break;
		case "EUR":
			currencyIcon = "€";
			break;
		case "JPY":
			currencyIcon = "¥";
			break;

		default:
			currencyIcon = "$";
			break;
	}

	const addToCartHandler = (_: React.MouseEvent<HTMLButtonElement, MouseEvent>, item: ProductItemModel) => {
		_.preventDefault();
		dispatch(addItemToCart(item));
	};
	return (
		<div className="prdt_card">
			<Link to={`/product-detail/${props.product.id}`}>
				<div className="prdt_card-box">
					<div className="top-sect">
						<img src={props.product.prdt_img} alt="" />
						<button className="add_to_cart" onClick={(e) => addToCartHandler(e, props.product)}>
							<img src="/asset/Icon/white-cart-icn.svg" alt="" />
						</button>
						{!props.product.prdt_instock && (
							<div className="out_of_stock">
								<span>OUT OF STOCK</span>
							</div>
						)}
					</div>
					<div className="bottom-sect">
						<h4>{`${props.product.prdt_title} ${props.product.prdt_subTitle}`}</h4>
						<p>
							{currencyIcon}
							{props.product.prdt_price.toFixed(2)}
						</p>
					</div>
				</div>
			</Link>
			{!props.product.prdt_instock && <div className="out_of_stock"></div>}
		</div>
	);
};

export default ProductCard;
