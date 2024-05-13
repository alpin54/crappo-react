// -- tempaltes
import Default from "presentation/component/templates/Default";

// -- widgets
import HeroBannerWidget from "infrastructure/widgets/HeroBannerWidget";
import NumbersWidget from "infrastructure/widgets/NumbersWidget";
import WhyCrappoWidget from "infrastructure/widgets/WhyCrappoWidget";
import CalculateWidget from "infrastructure/widgets/CalculateWidget";
import CryptoCurrenciesWidget from "infrastructure/widgets/CryptoCurrenciesWidget";
import InvestSmartWidget from "infrastructure/widgets/InvestSmartWidget";
import StatisticsWidget from "infrastructure/widgets/StatisticsWidget";
import ProfitInvestmentsWidget from "infrastructure/widgets/ProfitInvestmentsWidget";

// -- components
// import StartMining from "presentation/component/organisms/StartMining";

const Products = () => {
	return (
		<Default activeMenu="products">
			<HeroBannerWidget />
			<NumbersWidget />
			<WhyCrappoWidget />
			<CalculateWidget />
			<CryptoCurrenciesWidget />
			<InvestSmartWidget />
			<StatisticsWidget />
			<ProfitInvestmentsWidget />
		</Default>
	);
};

export default Products;
