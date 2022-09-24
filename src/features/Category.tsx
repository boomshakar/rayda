import ProductCard from "components/ProductCard";
import React from "react";
import "styles/categoryFeat.scss";

const Category: React.FC = () => {
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
