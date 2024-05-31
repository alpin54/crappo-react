import httpRequest from "infrastructure/api/httpRequest";
import ENDPOINT from "infrastructure/api/endPoint";

const handleList = () => {
	const { ready, data, error } = httpRequest({
		method: "get",
		url: ENDPOINT.CALCULATE,
	});

	return {
		ready,
		data,
		error,
	};
};

const calculateModel = {
	list: handleList,
};

export default calculateModel;
