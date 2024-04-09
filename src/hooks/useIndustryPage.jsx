import { useEffect, useState } from "react";
import { getIndustryPage } from "../utils/index.js";

export function useIndustryPage(page) {
  const [data, setData] = useState({
    details: [],
    quoteData: {},
    capabilities: [],
    loading: true,
    error: false,
  });

  async function downloadPageData() {
    try {
      const response = await getIndustryPage(page);
      if (response.data) {
        setData({
          hero: response.data,
          details: response.data.industry_details_data,
          quoteData: response.data.quote_content,
          capabilities: response.data.industry_capabilities,
          loading: false,
          error: false,
        });
      } else {
        console.error("No data received from the API");
        setData((prevData) => ({ ...prevData, error: true }));
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setData((prevData) => ({ ...prevData, error: true }));
    }
  }

  useEffect(() => {
    downloadPageData();
  }, []);

  return data;
}
