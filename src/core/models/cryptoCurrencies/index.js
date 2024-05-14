// -- api
import httpRequest from "infrastructure/api/httpRequest";
import ENDPOINT from "infrastructure/api/endPoint";

const handleList = () => {
	const { ready, data, error } = httpRequest({
		url: ENDPOINT.CRYPTOCURRENCIES,
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
