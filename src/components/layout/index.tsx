import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { routes } from "utils/route";
import "styles/layout.scss";

const Layout: React.FC = () => {
	const location = useLocation();

	return (
		<main className="root-container">
			<nav className="nav_container">
				<div className="nav-link-contain">
					<div className={`nav-link ${location.pathname === routes.category && "active"}`}>
						<Link to={routes.category}>Women</Link>
					</div>
					<div className={`nav-link ${location.pathname === routes.test && "active"}`}>
						<Link to={routes.test}>Mens</Link>
					</div>
					<div className={`nav-link ${location.pathname === routes.category && "active"}`}>
						<Link to={routes.category}>Kids</Link>
					</div>
				</div>
				<div className="logo-contain">
					<img src="/asset/rayda-logo.svg" alt="rayda-logo" />
				</div>
				<div className="nav_end-action">
					<span>$</span>
					<span>
						<img src="/asset/Icon/cart-icon.svg" alt="cart" />
					</span>
				</div>
			</nav>
			<div>
				<Outlet />
			</div>
		</main>
	);
};

export default Layout;
