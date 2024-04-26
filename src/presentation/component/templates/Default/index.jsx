//- core
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// -- components
import Header from "presentation/component/organisms/Header";
import Footer from "presentation/component/organisms/Footer";

const Default = ({ activeMenu, children }) => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<>
			<Header activeMenu={activeMenu} />
			<main className="main">{children}</main>
			<Footer />
		</>
	);
};

export default Default;
