// -- core
import { useEffect, useState } from "react";

// -- api
import httpRequest from "infrastructure/api/httpRequest";
import ENDPOINT from "infrastructure/api/endPoint";

// -- organisms
import Features from "presentation/component/organisms/Features";

const FeaturesWidget = () => {
	// state
	const [data, setData] = useState([]);

	// call API
	const { data: getData } = httpRequest({
		url: ENDPOINT.NUMBERS,
		method: "get",
	});

	// use effect
	useEffect(() => {
		if (getData?.data?.length) {
			setData(getData?.data);
		}
	}, [getData]);

	return <Features data={data} />;
};

export default FeaturesWidget;
