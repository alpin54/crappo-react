// -- tempaltes
import Default from "presentation/component/templates/Default";

// -- components
import HeroBanner from "presentation/component/organisms/HeroBanner";
import Features from "presentation/component/organisms/Features";
import WhyCrappo from "presentation/component/organisms/WhyCrappo";
import Calculate from "presentation/component/organisms/Calculate";
import Crypto from "presentation/component/organisms/Crypto";
import Market from "presentation/component/organisms/Market";
import Statistics from "presentation/component/organisms/Statistics";
import GrowProfit from "presentation/component/organisms/GrowProfit";
import StartMining from "presentation/component/organisms/StartMining";

// -- dummy data
import bannerData from "./bannerData";
import featuresData from "./featuresData";
import whyCrappoData from "./whyCrappoData";
import calculateData from "./calculateData";
import cryptoData from "./cryptoData";
import marketData from "./marketData";
import statisticsData from "./statisticsData";
import growProfitData from "./growProfitData";
import startMiningData from "./startMiningData";

const Home = () => {
	return (
		<Default activeMenu="home">
			<HeroBanner {...bannerData} />
			<Features {...featuresData} />
			<WhyCrappo {...whyCrappoData} />
			<Calculate {...calculateData} />
			<Crypto {...cryptoData} />
			<Market {...marketData} />
			<Statistics {...statisticsData} />
			<GrowProfit {...growProfitData} />
			<StartMining {...startMiningData} />
		</Default>
	);
};

export default Home;
