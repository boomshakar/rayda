import Layout from "layout";
import Category from "pages/Category";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "utils/route";
import ProductDetail from "pages/ProductDetail";
import Cart from "pages/Cart";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "hooks/redux-hooks.";
import { calculateTotal, selectCart } from "store/cartSlice";
import { saveproducts, startFetch } from "store/productsSlice";
import { productListConst } from "utils/produtListConst";
function App() {
	const dispatch = useAppDispatch();
	const { cartItems } = useAppSelector(selectCart);

	useEffect(() => {
		dispatch(startFetch());
		dispatch(saveproducts(productListConst));
		return () => {};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		dispatch(calculateTotal());
		return () => {};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [cartItems]);

	return (
		<div className="">
			<Router>
				<Routes>
					<Route element={<Layout />}>
						<Route path={routes.cart} element={<Cart />} />
						<Route path={routes.productDt} element={<ProductDetail />} />
						<Route path={routes.category} element={<Category />} />
					</Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
