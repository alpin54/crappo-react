// -- api
import httpRequest from "infrastructure/api/httpRequest";
import ENDPOINT from "infrastructure/api/endPoint";

const handleList = () => {
	// call API
	const { ready, data, error } = httpRequest({
		url: ENDPOINT.HERO_BANNER,
		method: "get",
	});

	// use effect
	if (ready) {
		const transformData = data?.data.map((val) => ({
			img: val.image,
			title: val.title,
			desc: val.description,
			sale: {
				title: val.label.badge,
				desc: val.label.description,
			},
			btn: {
				to: val.button.to,
				text: val.button.text,
			},
		}));
		data.data = transformData;
	}

	return {
		ready,
		data,
		error,
	};
};

const heroBannerModel = {
	list: handleList,
};

export default heroBannerModel;
