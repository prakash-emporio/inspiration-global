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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Homepage />} />
      <Route path="software/aws" element={<SoftwarePage />} />
      <Route path="software/oracle" element={<SoftwarePage />} />
      <Route path="software/salesforce" element={<SoftwarePage />} />
      <Route path="software/azure" element={<SoftwarePage />} />
      <Route path="software/shopify" element={<SoftwarePage />} />
      <Route path="services" element={<ServicePage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
