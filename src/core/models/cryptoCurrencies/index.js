// -- api
import httpRequest from "infrastructure/api/httpRequest";

const handleList = () => {
	const { ready, data, error } = httpRequest({
		url: "https://x-api.alpha-x.id/v1/crappo/cryptocurrencies",
		method: "get",
	});

	return {
		ready,
		data,
		error,
	};
};

const cryptoCurrenciesModel = {
	list: handleList,
};

export default cryptoCurrenciesModel;
