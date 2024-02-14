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
import HomePage from "./components/pages/HomePage.jsx";
import TalentPage from "./components/pages/TalentPage.jsx";
import InsightPage from "./components/pages/InsightPage.jsx";
import CompanyPage from "./components/pages/CompanyPage.jsx";
import SoftwareAwsPage from "./components/pages/Software/SoftwareAwsPage.jsx";
import SoftwareOraclePage from "./components/pages/Software/SoftwareOraclePage.jsx";
import SoftwareSalesforcePage from "./components/pages/Software/SoftwareSalesforcePage.jsx";
import SoftwareAzurePage from "./components/pages/Software/SoftwareAzurePage.jsx";
import SoftwareShopifyPage from "./components/pages/Software/SoftwareShopifyPage.jsx";
import ServiceProductEngPage from "./components/pages/Service/ServiceProductEngPage.jsx";
import ServiceCustomDPage from "./components/pages/Service/ServiceCustomDPage.jsx";
import ServiceCloudServicePage from "./components/pages/Service/ServiceCloudServicePage.jsx";
import ServiceDataAnalyticsPage from "./components/pages/Service/ServiceDataAnalyticsPage.jsx";
import ServiceAIPage from "./components/pages/Service/ServiceAIPage.jsx";
import ServiceCIOAdvisory from "./components/pages/Service/ServiceCIOAdvisory.jsx";
import ServicePMO from "./components/pages/Service/ServicePMO.jsx";
import ServiceSecurityPage from "./components/pages/Service/ServiceSecurityPage.jsx";
import IndustryPublicSectorPage from "./components/pages/Industry/IndustryPublicSectorPage.jsx";
import IndustryHealthCarePage from "./components/pages/Industry/IndustryHealthCarePage.jsx";
import IndustryHigherEdPage from "./components/pages/Industry/IndustryHigherEdPage.jsx";
import IndustryInsurancePage from "./components/pages/Industry/IndustryInsurancePage.jsx";
import IndustryPEVCPage from "./components/pages/Industry/IndustryPEVCPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<HomePage />} />
      <Route path="software/aws" element={<SoftwareAwsPage />} />
      <Route path="software/oracle" element={<SoftwareOraclePage />} />
      <Route path="software/salesforce" element={<SoftwareSalesforcePage />} />
      <Route path="software/azure" element={<SoftwareAzurePage />} />
      <Route path="software/shopify" element={<SoftwareShopifyPage />} />
      <Route path="services/product-engineering" element={<ServiceProductEngPage />} />
      <Route path="services/custom-development" element={<ServiceCustomDPage />} />
      <Route path="services/cloud-services" element={<ServiceCloudServicePage />} />
      <Route path="services/data-analytics" element={<ServiceDataAnalyticsPage />} />
      <Route path="services/artificial-intelligence" element={<ServiceAIPage />} />
      <Route path="services/cio-advisory" element={<ServiceCIOAdvisory />} />
      <Route path="services/pmo" element={<ServicePMO />} />
      <Route path="services/security" element={<ServiceSecurityPage />} />
      <Route path="talent" element={<TalentPage />} />
      <Route path="industry" element={<IndustryPublicSectorPage />} />
      <Route path="industry/public-sector" element={<IndustryPublicSectorPage />} />
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
