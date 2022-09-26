import ProductDetailInfo from "components/ProductDetailInfo";
import { useAppDispatch, useAppSelector } from "hooks/redux-hooks.";
import React from "react";
import { useParams } from "react-router-dom";
import { selectProductList } from "store/productsSlice";
import "styles/productDetail.scss";

const ProductDetail = () => {
	const { productId } = useParams();
	const productList = useAppSelector(selectProductList);
	const currentproduct = productList.find((item) => item.id === productId);

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
						{/* <img src={currentproduct?.prdt_img} alt="" /> */}
					</div>
				</div>

				<ProductDetailInfo />
			</div>
		</div>
	);
};

export default ProductDetail;
