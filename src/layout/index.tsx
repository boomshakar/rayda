import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { routes } from "utils/route";
import "styles/layout.scss";
import CartPopUp from "components/CartPopUp";

const Layout: React.FC = () => {
	const [showCart, setShowCart] = useState(false);
	const location = useLocation();

	const handleCartAction = () => {
		setShowCart(!showCart);
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
					</span>
				</div>
			</nav>
			<main className="page_container">
				<CartPopUp visible={showCart} />
				<div className="page_comp">
					<Outlet />
				</div>
			</main>
		</div>
	);
};

export default Layout;
