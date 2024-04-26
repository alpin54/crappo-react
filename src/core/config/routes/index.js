// -- pages
import Home from "presentation/container/pages/Home";

import NotFound from "presentation/container/pages/NotFound";

const routes = [
	{
		path: "/",
		element: <Home />,
		errorElement: <NotFound />,
	}
];

export default routes;
