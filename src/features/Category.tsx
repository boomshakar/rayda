import ProductCard from "components/ProductCard";
import { useAppDispatch, useAppSelector } from "hooks/redux-hooks.";
import React, { useEffect } from "react";
import { saveproducts, selectIsProductListLoading, selectProductList, startFetch } from "store/productsSlice";
import "styles/categoryFeat.scss";
import { productListConst } from "utils/produtListConst";

const Category: React.FC = () => {
	const dispatch = useAppDispatch();
	const productList = useAppSelector(selectProductList);
	const isProductListLoading = useAppSelector(selectIsProductListLoading);

	useEffect(() => {
		dispatch(startFetch());
		dispatch(saveproducts(productListConst));
		return () => {};
	}, []);
	return (
		<div className="catgory_pg-container">
			<h1>Category name</h1>
			<section className="product-section">
				{/* Product cards */}
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</section>
		</div>
	);
};

export default Category;
