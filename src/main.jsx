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
import SoftwarePage from "./components/pages/SoftwarePage.jsx";
import ServicePage from "./components/pages/ServicePage.jsx";
import TalentPage from "./components/pages/TalentPage.jsx";
import IndustryPage from "./components/pages/IndustryPage.jsx";
import InsightPage from "./components/pages/InsightPage.jsx";
import CompanyPage from "./components/pages/CompanyPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Homepage />} />
      <Route path="software/aws" element={<SoftwarePage />} />
      <Route path="software/oracle" element={<SoftwarePage />} />
      <Route path="software/salesforce" element={<SoftwarePage />} />
      <Route path="software/azure" element={<SoftwarePage />} />
      <Route path="software/shopify" element={<SoftwarePage />} />
      <Route path="services/product-engineering" element={<ServicePage />} />
      <Route path="services/custom-development" element={<ServicePage />} />
      <Route path="services/cloud-services" element={<ServicePage />} />
      <Route path="services/data-analytics" element={<ServicePage />} />
      <Route path="services/artificial-intelligence" element={<ServicePage />} />
      <Route path="services/cio-advisory" element={<ServicePage />} />
      <Route path="services/pmo" element={<ServicePage />} />
      <Route path="services/security" element={<ServicePage />} />
      <Route path="talent" element={<TalentPage />} />
      <Route path="industry" element={<IndustryPage />} />
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
