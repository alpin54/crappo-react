// -- core
import { useEffect, useState } from "react";

// -- api
import httpRequest from "infrastructure/api/httpRequest";
import ENDPOINT from "infrastructure/api/endPoint";

// -- organisms
import Numbers from "presentation/component/organisms/Numbers";

const NumbersWidget = () => {
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

	return <Numbers data={data} />;
};

export default NumbersWidget;
