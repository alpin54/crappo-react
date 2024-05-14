// -- models
import cryptoCurrenciesModel from "core/models/cryptoCurrencies";

// -- organisms
import Crypto from "presentation/component/organisms/Crypto";

const CryptoCurrenciesWidget = () => {
	const { ready, data, error } = cryptoCurrenciesModel.list();

	return <Crypto ready={ready} data={data?.data} error={error} />;
};

export default CryptoCurrenciesWidget;
