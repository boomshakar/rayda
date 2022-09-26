import { useAppDispatch, useAppSelector } from "hooks/redux-hooks.";
import React from "react";
import { useParams } from "react-router-dom";
import { selectProductList } from "store/productsSlice";
import Button from "./buttons/Button";
import ColorCheckbox from "./checkbox/ColorCheckbox";
import SizeCheckbox from "./checkbox/SizeCheckbox";
import { addItemToCart, changeCartItemColor, changeCartItemSize } from "store/cartSlice";
import { CartProductModel, ProductItemModel } from "models/redux-models";

const ProductDetailInfo = () => {
	const { productId } = useParams();
	const dispatch = useAppDispatch();
	const productList = useAppSelector(selectProductList);
	const currentproduct = productList.find((item) => item.id === productId);

	const handleSizeCheckbox = (e: React.ChangeEvent<HTMLInputElement>, item: CartProductModel) => {
		dispatch(changeCartItemSize({ item, value: e.target.value }));
	};
	const handleColorCheckbox = (e: React.ChangeEvent<HTMLInputElement>, item: CartProductModel) => {
		dispatch(changeCartItemColor({ item, value: e.target.value }));
	};
	const addToCartHandler = (item: ProductItemModel) => {
		dispatch(addItemToCart(item));
	};

	return (
		<div className="product-info">
			<div className="title">
				<h1>{currentproduct?.prdt_title}</h1>
				<h1>{currentproduct?.prdt_subTitle}</h1>
			</div>
			<div className="product_size">
				<p>Size:</p>
				<div className="checkbox">
					{currentproduct?.prdt_size_arr.map((prdt_size) => {
						return (
							<SizeCheckbox
								key={prdt_size}
								value={prdt_size}
								checked={prdt_size === currentproduct?.prdt_size}
								onChange={(e) => handleSizeCheckbox(e, { ...currentproduct, prdt_qty: 1 })}
							/>
						);
					})}
				</div>
			</div>
			<div className="product_color">
				<p>Color:</p>
				<div className="checkbox">
					{currentproduct?.prdt_color_arr.map((prdt_size) => {
						return (
							<ColorCheckbox
								key={prdt_size}
								value={prdt_size}
								checked={prdt_size === currentproduct?.prdt_color}
								onChange={(e) => handleColorCheckbox(e, { ...currentproduct, prdt_qty: 1 })}
							/>
						);
					})}
				</div>
			</div>
			<div className="product_price">
				<p>PRICE:</p>
				<p>${currentproduct?.prdt_price}</p>
			</div>
			<div className="product_cta">
				<Button
					onClick={() => (currentproduct ? addToCartHandler(currentproduct) : null)}
					value="ADD TO CART"
					which="lead"
				/>
			</div>
			<div className="product_details">
				<p>{currentproduct?.prdt_desc}</p>
			</div>
		</div>
	);
};

export default ProductDetailInfo;
