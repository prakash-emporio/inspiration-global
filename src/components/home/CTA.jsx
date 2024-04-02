import { NavLink } from "react-router-dom";
import "../css/CTA.css";
import aws from "/aws.svg";
import azure from "/azure.svg";
import oracle from "/oracle.svg";
import salesforce from "/salesforce.svg";
import shopify from "/shopify.svg";

export default function CTA({ title, description }) {
  const splitIndex = description.indexOf("Our application services offer");
  const part1 = description.slice(0, splitIndex);
  const part2 = description.slice(splitIndex);
  return (
    <div className="">
      <div className="container-fluid card card-padding cta-card-color position-relative">
        <div className="row">
          <div className="col col-md-12">
            <h1 className="card-body my-5 cta-text text-center">{title}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col g-5 text-center col">
            <NavLink reloadDocument to="/software/aws">
              <img className="aws cta-img" src={aws} alt="aws-logo" />
            </NavLink>
            <NavLink reloadDocument to="/software/oracle">
              <img className="oracle cta-img" src={oracle} alt="oracle-logo" />
            </NavLink>
            <NavLink reloadDocument to="/software/salesforce">
              <img
                className="salesforce cta-img"
                src={salesforce}
                alt="salesforce-logo"
              />
            </NavLink>
            <NavLink reloadDocument to="/software/azure">
              <img className="azure cta-img" src={azure} alt="azure-logo" />
            </NavLink>
            <img className="shopify cta-img" src={shopify} alt="shopify-logo" />
          </div>
        </div>
      </div>
      <div className="container text-center hero-cta">
        <div className="row">
          <div className="my-lg-5 col col-md-12">
            <p className="cta-paragraph">{part1}</p>
            <p className="cta-paragraph">{part2}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
