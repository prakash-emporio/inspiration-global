import "../css/CTA.css";
import aws from "/aws.svg";
import oracle from "/oracle.svg";
import salesforce from "/salesforce.svg";
import azure from "/azure.svg";
import shopify from "/shopify.svg";

export default function CTA() {
  return (
    <div className="my-5 text-center">
      <div className="card card-padding cta-card-color">
        <h1 className="card-body cta-text">
          Powering Enterprises
        </h1>
        <li className="grid cta-logo-wrapper">
          <img src={aws} alt="aws-logo" />
          <img src={oracle} alt="oracle-logo" />
          <img src={salesforce} alt="salesforce-logo" />
          <img src={azure} alt="azure-logo" />
          <img src={shopify} alt="shopify-logo" />
        </li>
      </div>
      <div className="mt-5 container">
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
