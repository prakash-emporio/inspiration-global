import "../css/CTA.css";
import aws from "/aws.svg";
import oracle from "/oracle.svg";
import salesforce from "/salesforce.svg";
import azure from "/azure.svg";
import shopify from "/shopify.svg";

export default function CTA() {
  return (
    <div className="my-5">
      <div className="card card-padding cta-card-color position-relative">
        <h1 className="card-body mt-5 cta-text text-center">Powering Enterprises</h1>
        <div className="mt-5 d-flex justify-content-center align-items-center gap-5">
          <div className="item">
            <img className="aws cta-img" src={aws} alt="aws-logo" />
          </div>
          <div className="item">
            <img className="oracle cta-img" src={oracle} alt="oracle-logo" />
          </div>
          <div className="item">
            <img className="salesforce cta-img" src={salesforce} alt="salesforce-logo" />
          </div>
          <div className="item">
            <img className="azure cta-img" src={azure} alt="azure-logo" />
          </div>
          <div className="item">
            <img className="shopify cta-img" src={shopify} alt="shopify-logo" />
          </div>
        </div>
      </div>
      <div className="mt-5 p-5 container text-center hero-cta">
        <div className="row justify-content-center">
          <div className="col-10">
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
