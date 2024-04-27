// -- core
import { useEffect, useState } from "react";

// -- api
import httpRequest from "infrastructure/api/httpRequest";
import ENDPOINT from "infrastructure/api/endPoint";

// -- organisms
import HeroBanner from "presentation/component/organisms/HeroBanner";

const HeroBannerWidget = () => {
	// state
	const [data, setData] = useState([]);

	// call API
	const { data: getData } = httpRequest({
		url: ENDPOINT.HERO_BANNER,
		method: "get",
	});

	// use effect
	useEffect(() => {
		if (getData?.data?.length) {
			let transformData = [];
			getData?.data.forEach((val) => {
				transformData.push({
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
				});
			});

			setData(transformData);
		}
	}, [getData]);

	return <HeroBanner list={data} />;
};

export default HeroBannerWidget;
