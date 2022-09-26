import ProductCard from "components/ProductCard";
import { useAppSelector } from "hooks/redux-hooks.";
import React from "react";
import { selectIsProductListLoading, selectProductList } from "store/productsSlice";
import "styles/categoryFeat.scss";

const Category: React.FC = () => {
	const productList = useAppSelector(selectProductList);
	const isProductListLoading = useAppSelector(selectIsProductListLoading);

	return (
		<div className="catgory_pg-container">
			<h1>Category name</h1>
			<section className="product-section">
				{isProductListLoading ? (
					<div>Loading ...</div>
				) : (
					productList.map((product) => <ProductCard key={product.id} product={product} />)
				)}
			</section>
		</div>
	);
};

export default Category;
