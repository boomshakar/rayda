import { ProductItemModel } from "models/redux-models";
import React from "react";
import { Link } from "react-router-dom";
import "styles/productCard.scss";

const ProductCard = (props: { product: ProductItemModel }) => {
	return (
		<div className="prdt_card">
			<Link to={`/product-detail/${props.product.id}`}>
				<div className="prdt_card-box">
					<div className="top-sect">
						<img src={props.product.prdt_img} alt="" />
						<button className="add_to_cart">
							<img src="/asset/Icon/white-cart-icn.svg" alt="" />
						</button>
					</div>
					<div className="bottom-sect">
						<h4>{`${props.product.prdt_title} ${props.product.prdt_subTitle}`}</h4>
						<p>${props.product.prdt_price.toFixed(2)}</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default ProductCard;
