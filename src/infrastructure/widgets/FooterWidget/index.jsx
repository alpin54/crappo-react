// -- core
import { useEffect, useState } from "react";

// -- api
import httpRequest from "infrastructure/api/httpRequest";
import ENDPOINT from "infrastructure/api/endPoint";

// -- organisms
import Footer from "presentation/component/organisms/Footer";

const FooterWidget = () => {
	// state
	const [data, setData] = useState({
		brand: {},
		copyright: "",
		menu: [],
		payments: {
			title: "",
			list: [],
		},
		social_media: [],
	});

	// call API
	const {
		ready: getReady,
		data: getData,
		error: getError,
	} = httpRequest({
		url: ENDPOINT.FOOTER,
		method: "get",
	});

	// use effect
	useEffect(() => {
		if (getData?.data) {
			setData(getData?.data);
		}
	}, [getData]);

	return <Footer ready={getReady} data={data} error={getError} />;
};

export default FooterWidget;
