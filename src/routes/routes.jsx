import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../Layout.jsx";

import {
  BlogDetailPage,
  CareersDetailPage,
  CareersPage,
  CaseStudyPage,
  CompanyPage,
  ContactUsPage,
  DEIPolicyPage,
  Homepage,
  IndustryHealthCarePage,
  IndustryHigherEdPage,
  IndustryInsurancePage,
  IndustryPEVCPage,
  IndustryPublicSectorPage,
  InsightPage,
  ServiceAIPage,
  ServiceCIOAdvisoryPage,
  ServiceCloudServicePage,
  ServiceCustomDevlopmentPage,
  ServiceDataAnalyticsPage,
  ServicePMOPage,
  ServiceProductEngineeringPage,
  ServiceSecurityPage,
  SoftwareAwsPage,
  SoftwareAzurePage,
  SoftwareOraclePage,
  SoftwareSalesforcePage,
  SourcingPage,
  TalentPage,
} from "../pages/index.js";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Homepage />} />
      <Route path="software/aws" element={<SoftwareAwsPage />} />
      <Route path="software/oracle" element={<SoftwareOraclePage />} />
      <Route path="software/salesforce" element={<SoftwareSalesforcePage />} />
      <Route path="software/azure" element={<SoftwareAzurePage />} />
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
      <Route path="/insight/blog" element={<InsightPage />} />
      <Route path="/insight/blog/:slug" element={<BlogDetailPage />} />
      <Route path="/insight/casestudy" element={<CaseStudyPage />} />
      <Route path="company" element={<CompanyPage />} />
      <Route path="policy" element={<DEIPolicyPage />} />
      <Route path="sourcing" element={<SourcingPage />} />
      <Route path="careers" element={<CareersPage />} />
      <Route path="/careers/:id" element={<CareersDetailPage />} />
      <Route path="/contact-us" element={<ContactUsPage />} />
    </Route>
  )
);
