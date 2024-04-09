import { useEffect, useState } from "react";
import { getSoftwarePage } from "../utils/index.js";

export function useSoftwarePage(page) {
	const [data, setData] = useState({
		heroData: {},
		featureSectionData: {},
		softwareCardData: [],
		quoteData: {},
		isLoading: true,
	});

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await getSoftwarePage(page);
				setData({
					heroData: response.data,
					featureSectionData:
						response.data.below_banner_software_content,
					softwareCardData: response.data.software_details_data,
					quoteData: response.data.quote_content,
					isLoading: false,
				});
			} catch (error) {
				console.log("Software Page", error);
			}
		}

		fetchData();

		// Cleanup function to cancel the request if component unmounts or if page changes
		return () => {
			// perform cleanup here if necessary
		};
	}, [page]);

	return data;
}
