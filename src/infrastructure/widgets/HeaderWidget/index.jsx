// -- core
import { useEffect, useState } from "react";

// -- api
import httpRequest from "infrastructure/api/httpRequest";
import ENDPOINT from "infrastructure/api/endPoint";

// -- organisms
import Header from "presentation/component/organisms/Header";

const HeaderWidget = ({ activeMenu }) => {
	// state
	const [data, setData] = useState({
		brand: {},
		main_menu: [],
		auth_menu: [],
	});

	// call API
	const {
		ready: getReady,
		data: getData,
		error: getError,
	} = httpRequest({
		url: ENDPOINT.HEADER,
		method: "get",
	});

	// use effect
	useEffect(() => {
		if (getData?.data) {
			setData(getData?.data);
		}
	}, [getData]);

	return (
		<Header
			activeMenu={activeMenu}
			ready={getReady}
			data={data}
			error={getError}
		/>
	);
};

export default HeaderWidget;
