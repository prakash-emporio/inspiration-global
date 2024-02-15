import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";

import {
  Homepage,
  SoftwareAwsPage,
  SoftwareAzurePage,
  SoftwareOraclePage,
  SoftwareSalesforcePage,
  SoftwareShopifyPage,
  ServiceProductEngineeringPage,
  ServiceCustomDevlopmentPage,
  ServiceCloudServicePage,
  ServiceDataAnalyticsPage,
  ServiceAIPage,
  ServiceCIOAdvisoryPage,
  ServicePMOPage,
  ServiceSecurityPage,
  TalentPage,
  IndustryPublicSectorPage,
  IndustryHealthCarePage,
  IndustryHigherEdPage,
  IndustryInsurancePage,
  IndustryPEVCPage,
  InsightPage,
  CompanyPage,
} from "./pages/index.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Homepage />} />
      <Route path="software/aws" element={<SoftwareAwsPage />} />
      <Route path="software/oracle" element={<SoftwareOraclePage />} />
      <Route path="software/salesforce" element={<SoftwareSalesforcePage />} />
      <Route path="software/azure" element={<SoftwareAzurePage />} />
      <Route path="software/shopify" element={<SoftwareShopifyPage />} />
      <Route
        path="services/product-engineering"
        element={<ServiceProductEngineeringPage />}
      />
      <Route
        path="services/custom-development"
        element={<ServiceCustomDevlopmentPage />}
      />
      <Route
        path="services/cloud-services"
        element={<ServiceCloudServicePage />}
      />
      <Route
        path="services/data-analytics"
        element={<ServiceDataAnalyticsPage />}
      />
      <Route
        path="services/artificial-intelligence"
        element={<ServiceAIPage />}
      />
      <Route
        path="services/cio-advisory"
        element={<ServiceCIOAdvisoryPage />}
      />
      <Route path="services/pmo" element={<ServicePMOPage />} />
      <Route path="services/security" element={<ServiceSecurityPage />} />
      <Route path="talent" element={<TalentPage />} />
      <Route
        path="industry/public-sector"
        element={<IndustryPublicSectorPage />}
      />
      <Route path="industry/health-care" element={<IndustryHealthCarePage />} />
      <Route path="industry/higher-ed" element={<IndustryHigherEdPage />} />
      <Route path="industry/insurance" element={<IndustryInsurancePage />} />
      <Route path="industry/pe-vc" element={<IndustryPEVCPage />} />
      <Route path="insight" element={<InsightPage />} />
      <Route path="company" element={<CompanyPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
