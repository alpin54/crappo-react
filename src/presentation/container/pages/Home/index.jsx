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
import bannerData from "./dummyData/bannerData";
import featuresData from "./dummyData/featuresData";
import whyCrappoData from "./dummyData/whyCrappoData";
import calculateData from "./dummyData/calculateData";
import cryptoData from "./dummyData/cryptoData";
import marketData from "./dummyData/marketData";
import statisticsData from "./dummyData/statisticsData";
import growProfitData from "./dummyData/growProfitData";
import startMiningData from "./dummyData/startMiningData";

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
