import "../css/CTA.css";
import aws from "/aws.svg";
import oracle from "/oracle.svg";
import salesforce from "/salesforce.svg";
import azure from "/azure.svg";
import shopify from "/shopify.svg";
import { NavLink } from "react-router-dom";

export default function CTA() {
  return (
    <div className="">
      <div className="container-fluid card card-padding cta-card-color position-relative">
        <div className="row">
          <div className="col col-md-12">
            <h1 className="card-body my-5 cta-text text-center">
              Powering Enterprises
            </h1>
          </div>
        </div>

        <div className="row">
          <div className="col g-5 text-center col-md-12">
            <NavLink to="/software/aws">
              <img className="aws cta-img" src={aws} alt="aws-logo" />
            </NavLink>
            <NavLink to="/software/oracle">
              <img className="oracle cta-img" src={oracle} alt="oracle-logo" />
            </NavLink>
            <NavLink to="/software/salesforce">
              <img
                className="salesforce cta-img"
                src={salesforce}
                alt="salesforce-logo"
              />
            </NavLink>
            <NavLink to="/software/azure">
              <img className="azure cta-img" src={azure} alt="azure-logo" />
            </NavLink>
            <NavLink to="/software/shopify">
              <img
                className="shopify cta-img"
                src={shopify}
                alt="shopify-logo"
              />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="container text-center hero-cta">
        <div className="row">
          <div className="my-5 col col-md-12">
            <p className="cta-paragraph">
              For a lot of companies, managing complex application landscapes
              that include a mix of legacy systems, digital technologies, and
              SaaS solutions can be a daunting task. Such landscapes can consume
              a significant amount of IT resources, hampering the company's
              potential for growth.
            </p>
            <p className="cta-paragraph">
              Our application services offer an effective solution to this
              challenge, enabling you to streamline and optimize your
              application landscape with speed and efficiency. We prioritize
              agility and adaptability, and continuously introduce innovative
              solutions to ensure that your business gains the most value from
              the capabilities we provide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
