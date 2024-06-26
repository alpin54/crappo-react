import httpRequest from "infrastructure/api/httpRequest";
import ENDPOINT from "infrastructure/api/endPoint";

const handleList = () => {
	const { ready, data, error } = httpRequest.firstLoad({
		method: "get",
		url: ENDPOINT.CRYPTOCURRENCIES,
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
