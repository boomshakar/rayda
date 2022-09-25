import React from "react";
import { Link } from "react-router-dom";
import "styles/productCard.scss";

const ProductCard: React.FC = () => {
	return (
		<div className="prdt_card">
			<Link to={"/product-detail/s313jdk244"}>
				<div className="prdt_card-box">
					<div className="top-sect">
						<img src="/asset/products/grey-top.png" alt="" />
						<button className="add_to_cart">
							<img src="/asset/Icon/white-cart-icn.svg" alt="" />
						</button>
					</div>
					<div className="bottom-sect">
						<h4>Apollo Running Short</h4>
						<p>$50.00</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default ProductCard;
