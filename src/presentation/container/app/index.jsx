// -- core
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// -- core config
import routes from "core/configs/routes";

const App = () => {
	const router = createBrowserRouter(routes);

	return <RouterProvider router={router} />;
};

export default App;
