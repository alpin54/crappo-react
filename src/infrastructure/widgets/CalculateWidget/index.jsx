// -- core
import { useEffect, useState } from "react";

// -- api
import httpRequest from "infrastructure/api/httpRequest";
import ENDPOINT from "infrastructure/api/endPoint";

// -- organisms
import Calculate from "presentation/component/organisms/Calculate";

const CalculateWidget = () => {
	// state
	const [data, setData] = useState([]);

	// call API
	const { data: getData } = httpRequest({
		url: ENDPOINT.CALCULATE,
		method: "get",
	});

	// use effect
	useEffect(() => {
		if (getData?.data?.length) {
			let transformData = [];
			getData?.data.forEach((val) => {
				transformData.push({
					value: val.value,
					text: val.unit,
				});
			});

			setData(transformData);
		}
	}, [getData]);

	return <Calculate data={data} />;
};

export default CalculateWidget;
