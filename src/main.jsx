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
import Homepage from "./components/pages/Homepage.jsx";
import ServicePage from "./components/pages/ServicePage.jsx";
import TalentPage from "./components/pages/TalentPage.jsx";
import InsightPage from "./components/pages/InsightPage.jsx";
import CompanyPage from "./components/pages/CompanyPage.jsx";
import SoftwareAwsPage from "./components/pages/SoftwareAwsPage.jsx";
import SoftwareOraclePage from "./components/pages/SoftwareOraclePage.jsx";
import SoftwareSalesforcePage from "./components/pages/SoftwareSalesforcePage.jsx";
import SoftwareAzurePage from "./components/pages/SoftwareAzurePage.jsx";
import SoftwareShopifyPage from "./components/pages/SoftwareShopifyPage.jsx";
import IndustryPublicSectorPage from "./components/pages/IndustryPublicSectorPage.jsx";
import IndustryHealthCarePage from "./components/pages/IndustryHealthCarePage.jsx";
import IndustryHigherEdPage from "./components/pages/IndustryHigherEdPage.jsx";
import IndustryInsurancePage from "./components/pages/IndustryInsurancePage.jsx";
import IndustryPEVCPage from "./components/pages/IndustryPEVCPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Homepage />} />
      <Route path="software/aws" element={<SoftwareAwsPage />} />
      <Route path="software/oracle" element={<SoftwareOraclePage />} />
      <Route path="software/salesforce" element={<SoftwareSalesforcePage />} />
      <Route path="software/azure" element={<SoftwareAzurePage />} />
      <Route path="software/shopify" element={<SoftwareShopifyPage />} />
      <Route path="services/product-engineering" element={<ServicePage />} />
      <Route path="services/custom-development" element={<ServicePage />} />
      <Route path="services/cloud-services" element={<ServicePage />} />
      <Route path="services/data-analytics" element={<ServicePage />} />
      <Route path="services/artificial-intelligence" element={<ServicePage />} />
      <Route path="services/cio-advisory" element={<ServicePage />} />
      <Route path="services/pmo" element={<ServicePage />} />
      <Route path="services/security" element={<ServicePage />} />
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
