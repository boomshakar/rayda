import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { routes } from "utils/route";
import "styles/layout.scss";
import CartPopUp from "components/CartPopUp";
import { useAppDispatch, useAppSelector } from "hooks/redux-hooks.";
import { toggle } from "store/uiSlice";
import { selectCart } from "store/cartSlice";

const Layout: React.FC = () => {
	const location = useLocation();
	const dispatch = useAppDispatch();
	const cartModel = useAppSelector(selectCart);

	const handleCartAction = () => {
		dispatch(toggle());
	};

	return (
		<div className="root-container">
			<nav className="nav_container">
				<div className="nav-link-contain">
					<div className={`nav-link ${location.pathname === routes.category && "active"}`}>
						<Link to={routes.category}>Women</Link>
					</div>
					<div className={`nav-link ${location.pathname === routes.test && "active"}`}>
						<Link to={routes.test}>Mens</Link>
					</div>
					<div className={`nav-link ${location.pathname === routes.category && "active"}`}>
						<Link to={routes.test}>Kids</Link>
					</div>
				</div>
				<div className="logo-contain">
					<img src="/asset/rayda-logo.svg" alt="rayda-logo" />
				</div>
				<div className="nav_end-action">
					<span>$</span>
					<span onClick={handleCartAction}>
						<img src="/asset/Icon/cart-icon.svg" alt="cart" />
						<span>{cartModel.amount}</span>
					</span>
				</div>
			</nav>
			<main className="page_container">
				<CartPopUp />
				<div className="page_comp">
					<Outlet />
				</div>
			</main>
		</div>
	);
};

export default Layout;
