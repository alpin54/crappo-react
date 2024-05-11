// -- core
import { useEffect, useState } from "react";

// -- api
import httpRequest from "infrastructure/api/httpRequest";
import ENDPOINT from "infrastructure/api/endPoint";

// -- organisms
import Crypto from "presentation/component/organisms/Crypto";

const CryptoWidget = () => {
	// state
	const [data, setData] = useState({
		title: "",
		list: [],
	});

	// call API
	const { data: getData } = httpRequest({
		url: ENDPOINT.CRYPTOCURRENCIES,
		method: "get",
	});

	// use effect
	useEffect(() => {
		if (getData?.data) {
			setData(getData?.data);
		}
	}, [getData]);

	return <Crypto data={data} />;
};

export default CryptoWidget;
