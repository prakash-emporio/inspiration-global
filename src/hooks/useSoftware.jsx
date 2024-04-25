import { useEffect, useRef, useState } from "react";
import { getSoftwarePage } from "../utils/index.js";

export function useSoftware(page) {
	const [data, setData] = useState({
		heroData: {},
		featureSectionData: {},
		softwareCardData: [],
		quoteData: {},
	});
	const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
	const loadingRef = useRef(null);

	useEffect(() => {
		(async function fetchData() {
			try {
				loadingRef.current.continuousStart();
				const response = await getSoftwarePage(page);
				setData({
					heroData: response.data,
					featureSectionData:
						response.data.below_banner_software_content,
					softwareCardData: response.data.software_details_data,
					quoteData: response.data.quote_content,
				});
			} catch (error) {
				console.log("Software Page", error);
			} finally {
				setLoading(false);
			}
		})();
	}, [page]);

	return { data, loading, error, loadingRef };
}
