// -- tempaltes
import Default from "presentation/component/templates/Default";

// -- widgets
import HeroBannerWidget from "infrastructure/widgets/HeroBannerWidget";
import NumbersWidget from "infrastructure/widgets/NumbersWidget";
import WhyCrappoWidget from "infrastructure/widgets/WhyCrappoWidget";
import CalculateWidget from "infrastructure/widgets/CalculateWidget";
import CryptoWidget from "infrastructure/widgets/CryptoWidget";
import InvestSmartWidget from "infrastructure/widgets/InvestSmartWidget";
import StatisticsWidget from "infrastructure/widgets/StatisticsWidget";
import ProfitInvestmentsWidget from "infrastructure/widgets/ProfitInvestmentsWidget";

// -- components
import StartMining from "presentation/component/organisms/StartMining";

const Home = () => {
	return (
		<Default activeMenu="home">
			<HeroBannerWidget />
			<NumbersWidget />
			<WhyCrappoWidget />
			<CalculateWidget />
			<CryptoWidget />
			<InvestSmartWidget />
			<StatisticsWidget />
			<ProfitInvestmentsWidget />
			<StartMining />
		</Default>
	);
};

export default Home;
