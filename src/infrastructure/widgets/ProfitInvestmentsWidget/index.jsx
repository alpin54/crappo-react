// -- core
import { useEffect, useState } from "react";

// -- api
import httpRequest from "infrastructure/api/httpRequest";
import ENDPOINT from "infrastructure/api/endPoint";

// -- organisms
import ProfitInvestments from "presentation/component/organisms/ProfitInvestments";

const ProfitInvestmentsWidget = () => {
	// state
	const [data, setData] = useState({
		title: "",
		image: "",
		description: "",
		button: {
			to: "",
			text: "",
		},
	});

	// call API
	const {
		ready: getReady,
		data: getData,
		error: getError,
	} = httpRequest({
		url: ENDPOINT.PROFIT_INVESTMENTS,
		method: "get",
	});

	// use effect
	useEffect(() => {
		if (getData?.data) {
			setData(getData?.data);
		}
	}, [getData]);

	return <ProfitInvestments ready={getReady} data={data} error={getError} />;
};

export default ProfitInvestmentsWidget;
