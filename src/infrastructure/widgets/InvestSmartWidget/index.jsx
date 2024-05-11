// -- core
import { useEffect, useState } from "react";

// -- api
import httpRequest from "infrastructure/api/httpRequest";
import ENDPOINT from "infrastructure/api/endPoint";

// -- organisms
import Market from "presentation/component/organisms/Market";

const InvestSmartWidget = () => {
	// state
	const [data, setData] = useState({
		title: "",
		section: {
			title: "",
			description: "",
			images: [],
			code: "",
			button: {
				to: "",
				text: "",
			},
		},
	});

	// call API
	const { data: getData } = httpRequest({
		url: ENDPOINT.INVEST_SMART,
		method: "get",
	});

	// use effect
	useEffect(() => {
		if (getData?.data) {
			setData(getData?.data);
		}
	}, [getData]);

	return <Market data={data} />;
};

export default InvestSmartWidget;
