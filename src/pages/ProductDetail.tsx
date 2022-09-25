import ProductDetailInfo from "components/ProductDetailInfo";
import React from "react";
import "styles/productDetail.scss";

type Props = {};

const ProductDetail = (props: Props) => {
	return (
		<div className="product_detail-pg-container">
			<div>
				<div className="img-contain">
					<div className="img_preview_slide_container">
						<div className="img_preview">
							<img src="/asset/products/grey-top-xs.png" alt="" />
						</div>
						<div className="img_preview">
							<img src="/asset/products/grey-top-xs.png" alt="" />
						</div>
						<div className="img_preview">
							<img src="/asset/products/grey-top-xs.png" alt="" />
						</div>
					</div>
					<div className="img_view_container">
						<img src="/asset/products/grey-top-xl.png" alt="" />
					</div>
				</div>
				<ProductDetailInfo />
			</div>
		</div>
	);
};

export default ProductDetail;
