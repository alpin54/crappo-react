// -- core
import { useEffect, useState } from "react";

// -- api
import httpRequest from "infrastructure/api/httpRequest";
import ENDPOINT from "infrastructure/api/endPoint";

// -- organisms
import WhyCrappo from "presentation/component/organisms/WhyCrappo";

const WhyCrappoWidget = () => {
	// state
	const [data, setData] = useState({
		image: "",
		title: "",
		description: "",
		button: {
			to: "",
			text: "",
		},
	});

	// call API
	const { data: getData } = httpRequest({
		url: ENDPOINT.WHY_CRAPPO,
		method: "get",
	});

	// use effect
	useEffect(() => {
		if (getData?.data) {
			setData(getData?.data);
		}
	}, [getData]);

	return <WhyCrappo data={data} />;
};

export default WhyCrappoWidget;
