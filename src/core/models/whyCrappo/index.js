import httpRequest from "infrastructure/api/httpRequest";
import ENDPOINT from "infrastructure/api/endPoint";

const handleList = () => {
	const { ready, data, error } = httpRequest.firstLoad({
		method: "get",
		url: ENDPOINT.WHY_CRAPPO,
	});

	return {
		ready,
		data,
		error,
	};
};

const whyCrappoModel = {
	list: handleList,
};

export default whyCrappoModel;
