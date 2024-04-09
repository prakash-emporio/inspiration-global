import { useEffect, useState } from "react";
import { getServicePage } from "../utils/index.js";

export function useServicePage(page) {
	const [data, setData] = useState({
		data: {},
		details: [],
		additionalData: [],
		quote: {},
		isLoading: true,
	});


	useEffect(() => {
		async function fetchData() {
			try {
				const response = await getServicePage(page);
				if (response.data) {
					setData({
						data: response.data,
						details: response.data.service_details_data,
						additionalData: response.data.services_in_service_data,
						quote: response.data.quote,
						isLoading: false,
					});
				}
			} catch (error) {
				console.log("Service Page", error);
			}
		}
		fetchData();
	}, [page]);

	return data;
}
