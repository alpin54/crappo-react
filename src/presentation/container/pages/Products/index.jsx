// -- core
import { useState } from "react";

// -- tempaltes
import Default from "presentation/container/templates/Default";

// -- states
import useStateHeader from "core/states/header";

// -- widgets
import HeroBannerWidget from "infrastructure/widgets/HeroBannerWidget";
import WhyCrappoWidget from "infrastructure/widgets/WhyCrappoWidget";
import NumbersWidget from "infrastructure/widgets/NumbersWidget";

// -- components
import StartMining from "presentation/component/organisms/Subscribe";

const Products = (props) => {
	const { setMenu } = useStateHeader();

	useState(() => {
		setMenu("");
	}, []);

	return (
		<Default activeMenu="products">
			<HeroBannerWidget />
			<WhyCrappoWidget />
			<NumbersWidget />
			<StartMining />
		</Default>
	);
};

export default Products;
