// --- core
import { useState, useEffect } from "react";

// --- library
import axios from "axios";

// --- RequestComponent
const RequestComponent = (param) => {
	const [ready, setReady] = useState(false);
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		let config = { ...param };

		if (param.token) {
			config = {
				...param,
				headers: {
					Authorization: "Bearer " + localStorage.getItem("token"),
				},
			};
		}

		axios(config)
			.then((response) => {
				setData(response.data);
				setReady(true);
			})
			.catch((error) => {
				if (error.response !== undefined) {
					setError({
						status: error.response.status,
						type: error.name,
						message: error.response.data.message,
					});
				} else {
					setError({
						status: 410,
						type: "Gone",
						message:
							"The requested resource is no longer available at the server.",
					});
				}
				setReady(true);
			});
		// eslint-disable-next-line
	}, []);

	return {
		ready,
		data,
		error,
	};
};

// --- httpRequest
const httpRequest = (param) => {
	return RequestComponent(param);
};

export default httpRequest;
