import httpRequest from "infrastructure/api/httpRequest";
import ENDPOINT from "infrastructure/api/endPoint";

const handleList = () => {
	const { ready, data, error } = httpRequest.firstLoad({
		method: "get",
		url: ENDPOINT.FOOTER,
	});

	return {
		ready,
		data,
		error,
	};
};

const footerModel = {
	list: handleList,
};

export default footerModel;
