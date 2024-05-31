// -- core
import { useState } from "react";

// -- tempaltes
import Default from "presentation/container/templates/Default";

// -- states
import useStateHeader from "core/states/header";

// -- widgets
import HeroBannerWidget from "infrastructure/widgets/HeroBannerWidget";
import NumbersWidget from "infrastructure/widgets/NumbersWidget";
import WhyCrappoWidget from "infrastructure/widgets/WhyCrappoWidget";
import SubsribeWidget from "infrastructure/widgets/SubscribeWidget";
// import CalculateWidget from "infrastructure/widgets/CalculateWidget";
// import CryptoCurrenciesWidget from "infrastructure/widgets/CryptoCurrenciesWidget";
// import InvestSmartWidget from "infrastructure/widgets/InvestSmartWidget";
// import StatisticsWidget from "infrastructure/widgets/StatisticsWidget";
// import ProfitInvestmentsWidget from "infrastructure/widgets/ProfitInvestmentsWidget";

const Home = (props) => {
	const { setMenu } = useStateHeader();

	useState(() => {
		setMenu("");
	}, []);

	return (
		<Default activeMenu="home">
			<HeroBannerWidget />
			<NumbersWidget />
			<WhyCrappoWidget />
			{/* <CalculateWidget /> */}
			{/* <CryptoCurrenciesWidget /> */}
			{/* <InvestSmartWidget /> */}
			{/* <StatisticsWidget /> */}
			{/* <ProfitInvestmentsWidget /> */}
			<SubsribeWidget />
		</Default>
	);
};

export default Home;
