import { useLocation } from "react-router-dom";
import AWSHero from "/AWSHero.png";
import OracleHero from "/OracleHero.png";
import SalesforceHero from "/SalesforceHero.png";
import AzureHero from "/AzureHero.png";
import ShopifyHero from "/ShopifyHero.png";
import AWSLogo from "/SoftwareAWS.svg";
import OracleLogo from "/SoftwareOracle.svg";
import SalesforceLogo from "/SoftwareSalesforce.svg";
import AzureLogo from "/SoftwareAzure.svg";
import ShopifyLogo from "/SoftwareShopify.svg";
import "./SoftwareHero.css";

export default function SoftwareHero() {
  const location = useLocation();
  const { pathname } = location;

  // Map the route to the corresponding hero image and logo
  const routeToHero = {
    "/aws": { hero: AWSHero, logo: AWSLogo },
    "/oracle": { hero: OracleHero, logo: OracleLogo },
    "/salesforce": { hero: SalesforceHero, logo: SalesforceLogo },
    "/azure": { hero: AzureHero, logo: AzureLogo },
    "/shopify": { hero: ShopifyHero, logo: ShopifyLogo },
  };

  // Determine the active route and corresponding hero image and logo
  const activeRoute = Object.keys(routeToHero).find((route) =>
    pathname.toLowerCase().includes(route)
  );
  const activeHero =
    (routeToHero[activeRoute] && routeToHero[activeRoute].hero) || AWSHero;
  const activeLogo =
    (routeToHero[activeRoute] && routeToHero[activeRoute].logo) || AWSLogo;

  // Map the route to the corresponding content
  const routeToContent = {
    "/aws": {
      title: "Cloud Ready consulting and AWS application development services.",
      text: "Designing and developing applications for AWS cloud requires a different approach compared to traditional on-premises applications.",
    },
    "/oracle": {
      title: "Oracle Cloud consulting and application development services.",
      text: "Designing and developing applications for Oracle Cloud requires a different approach compared to traditional on-premises applications.",
    },
    "/salesforce": {
      title: "Salesforce consulting and application development services.",
      text: "Designing and developing applications for Salesforce requires a different approach compared to traditional on-premises applications.",
    },
    "/azure": {
      title: "Azure consulting and application development services.",
      text: "Designing and developing applications for Azure requires a different approach compared to traditional on-premises applications.",
    },
    "/shopify": {
      title: "Shopify consulting and application development services.",
      text: "Designing and developing applications for Shopify requires a different approach compared to traditional on-premises applications.",
    },
  };

  const defaultContent = {
    title: "Cloud Ready consulting and application development services.",
    text: "Designing and developing applications for the cloud requires a different approach compared to traditional on-premises applications.",
  };

  // Determine the active content based on the active route, or use default content
  const activeContent = routeToContent[activeRoute] || defaultContent;

  return (
    <section className="container-fluid g-0 hero-banner">
      <div className="row position-relative">
        <img className="img-fluid hero-main-img" src={activeHero} alt="software-hero" />

          <img
            className="img-thumbnail position-absolute custom-m software-hero-logo"
            src={activeLogo}
            alt="route-logo"
          />
          <div className="container g-0">
            <div className="row g-0">
              <div className="col-lg-5 bg-transparent position-absolute software-top">
                <h5 className="text-white software-hero-main-text ">
                  {activeContent.title}
                </h5>
                <p className="software-hero-secondary-text text-white">
                  {activeContent.text}
                </p>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
