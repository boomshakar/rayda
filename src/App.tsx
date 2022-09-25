import Layout from "layout";
import Category from "features/Category";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "utils/route";
import ProductDetail from "features/ProductDetail";
import Cart from "features/Cart";
function App() {
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
