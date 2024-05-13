// -- pages
import Home from "presentation/container/pages/Home";

import NotFound from "presentation/container/pages/NotFound";
import Products from "presentation/container/pages/Products";

const routes = [
	{
		path: "/",
		element: <Home />,
		errorElement: <NotFound />,
	},
	{
		path: "/products",
		element: <Products />,
		errorElement: <NotFound />,
	},
];

export default routes;
