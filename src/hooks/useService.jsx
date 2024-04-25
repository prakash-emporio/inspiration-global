import { useEffect, useRef, useState } from "react";
import { getServicePage } from "../utils/index.js";

export function useService(page) {
	const [data, setData] = useState({
		data: {},
		details: [],
		additionalData: [],
		quote: {},
	});

	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const loadingRef = useRef(null);

	useEffect(() => {
		(async function fetchData() {
			try {
				loadingRef.current.continuousStart();
				const response = await getServicePage(page);
				if (response.data) {
					setData({
						data: response.data,
						details: response.data.service_details_data,
						additionalData: response.data.services_in_service_data,
						quote: response.data.quote,
					});
				}
			} catch (error) {
				console.log("Service Page", error);
			} finally {
				setLoading(false);
			}
		})();
	}, [page]);

	return { data, loading, error, loadingRef };
}
