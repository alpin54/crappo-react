// -- core
import { useEffect, useState } from "react";

// -- api
import httpRequest from "infrastructure/api/httpRequest";
import ENDPOINT from "infrastructure/api/endPoint";

// -- organisms
import InvestSmart from "presentation/component/organisms/InvestSmart";

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

	return <InvestSmart data={data} />;
};

export default InvestSmartWidget;
