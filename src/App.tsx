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
import { getXchangeRate } from "service/getXchangeRate";
import { selectUiState, updateNgnRate } from "store/uiSlice";
function App() {
	const dispatch = useAppDispatch();
	const { cartItems, total } = useAppSelector(selectCart);
	const { currency_val } = useAppSelector(selectUiState);

	useEffect(() => {
		dispatch(startFetch());
		dispatch(saveproducts(productListConst));
		getXchangeRate();
		return () => {};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	useEffect(() => {
		let isMounted = true;
		isMounted && getXchangeRate();
		return () => {
			isMounted = false;
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [total]);
	useEffect(() => {
		dispatch(calculateTotal());
		return () => {};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [cartItems]);

	const getXchangeRate = () => {
		const options = {
			method: "GET",
			headers: {
				"X-RapidAPI-Key": `${process.env.RAPID_API_KEY}`,
				"X-RapidAPI-Host": "currency-converter5.p.rapidapi.com",
			},
		};
		fetch(
			`https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=${currency_val}&to=NGN&amount=${total}`,
			options
		)
			.then((response) => response.json())
			.then((response) => {
				if (response.rates.NGN) {
					const xchangeRate = response?.rates?.NGN?.rate_for_amount;
					dispatch(updateNgnRate(xchangeRate));
				}
			})
			.catch((err) => console.error(err));
	};
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
