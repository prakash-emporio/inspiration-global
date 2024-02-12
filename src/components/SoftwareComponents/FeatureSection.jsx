import "./FeatureSection.css";

export default function FeatureSection({ activeRoute }) {

  let text;

  // Default title and subtitle
  const title = "Enterprise Performance at";
  const subTitle = "Scale";

  // Determine content based on the active route
  switch (activeRoute) {
    case "/software/aws":
      text =
        "IG and AWS collaborate to provide clients with expert industry knowledge and a vast network of cloud engineering resources. Together, they assist clients in developing agile, custom solutions that are bolstered by the power of the AWS cloud.";
      break;
    case "/software/oracle":
      text =
        "Unlock the Full Potential of Your Oracle Solution from Day One. One of the most common hurdles organizations face when embarking on Oracle Cloud or On-Premises solution implementations is the absence of a clear roadmap for maximizing the technology";
      break;
    case "/software/salesforce":
      text =
        "Are you fully leveraging every opportunity that comes your way? With our Salesforce platform and sales process expertise, you'll be well-equipped to do so. At Inspiration Digital, we help you forge stronger connections with your customers and hit your sales goals.";
      break;
    case "/software/azure":
      text =
        "We offer a business-focused, application-driven strategy that empowers us to deliver agile, hybrid Azure cloud solutions. This provides you with the portability and visibility necessary to manage workloads seamlessly and securely across core, cloud, and edge environments.";
      break;
    case "/software/shopify":
      text =
        "IG and Shopify collaborate to provide clients with expert industry knowledge and a vast network of cloud engineering resources. Together, they assist clients in developing agile, custom solutions that are bolstered by the power of the Shopify.";
      break;
  }

  return (
    <div className="container text-center">
      <div className="row my-5">
        <div className="col">
          <h2 className="feature-card-title">
            {title}
            <br />
            <p className="feature-card-title-next">{subTitle}</p>
          </h2>
          <p className="card-text feature-card-text">{text}</p>
        </div>
      </div>
    </div>
  );
}
