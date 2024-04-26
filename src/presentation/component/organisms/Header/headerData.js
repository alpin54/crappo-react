// -- asset image
import logo from "core/assets/img/logo/crappo-text.svg";

const headerData = {
	logo: {
		to: "/",
		img: logo,
		alt: "Crappo",
	},
	menu: [
		{
			to: "/products",
			text: "Products",
			classActive: "products",
		},
		{
			to: "/features",
			text: "Features",
			classActive: "features",
		},
		{
			to: "/about",
			text: "About",
			classActive: "about",
		},
		{
			to: "/contact",
			text: "Contact",
			classActive: "contact",
		},
		{
			to: "/login",
			text: "Login",
			classActive: "login",
		},
	],
};

export default headerData;
