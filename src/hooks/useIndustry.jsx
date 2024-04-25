import { useEffect, useRef, useState } from "react";
import { getIndustryPage } from "../utils/index.js";

export function useIndustry(page) {
	const [data, setData] = useState({
		details: [],
		quoteData: {},
		capabilities: [],
	});

	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const loadingRef = useRef(null);

	useEffect(() => {
		(async function downloadPageData() {
			try {
				loadingRef.current.continuousStart();
				const response = await getIndustryPage(page);
				if (response.data) {
					setData({
						hero: response.data,
						details: response.data.industry_details_data,
						quoteData: response.data.quote_content,
						capabilities: response.data.industry_capabilities,
					});
				}
			} catch (error) {
				setError(error);
				console.log("Industry Page", error);
			} finally {
				setLoading(false);
			}
		})();
	}, []);

	return { data, loading, error, loadingRef };
}
