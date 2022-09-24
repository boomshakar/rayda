import Layout from "components/layout";
import Category from "features/Category";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "utils/route";
function App() {
	return (
		<div className="">
			<Router>
				<Routes>
					<Route element={<Layout />}>
						<Route path={routes.category} element={<Category />} />
					</Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
