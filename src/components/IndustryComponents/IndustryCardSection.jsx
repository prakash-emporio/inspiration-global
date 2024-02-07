import "./industry.css";

const IndustryFeatureCard = ({ title, description }) => (
  <div className="col-md-6 col-lg">
    <div className="card bg-transparent">
      <div className="card-body">
        <h5 className="card-title talent-feature-section-card-title-0">
          {title}
        </h5>
        <p className="card-text industry-feature-section-card-text">
          {description}
        </p>
      </div>
    </div>
  </div>
);

export default function IndustryCardSection() {
  const engagementModels = [
    {
      title: "Talent & Recruitment",
      description:
        "We offer strategic consulting services that bring clarity to your talent and recruitment efforts, facilitating accelerated growth and shaping the future of your business today.",
    },
    {
      title: "Technology & Engineering",
      description:
        "Our expertise drives growth through the assessment, enhancement, and innovation of your organization's technology utilization, fostering continuous improvement.",
    },
    {
      title: "Enterprise Platforms",
      description:
        "We amplify the value of your investments in enterprise platforms through precise implementation, customization, and optimization tailored to your specific needs.",
    },
    {
      title: "Azure Platform",
      description:
        "Elevate your infrastructure to new levels of efficiency and business success with our consultancy, migration, optimization, and tailored solutions spanning the complete Azure platform.",
    },
  ];

  return (
    <div className="container-fluid talent-card-section-wrapper pb-5">
      <h1 className="talent-feature-section-header py-5">
        A Few of Our Capabilities
      </h1>
      <div className="row p-lg-5">
        {engagementModels.map((model, index) => (
          <IndustryFeatureCard
            key={index}
            title={model.title}
            description={model.description}
          />
        ))}
      </div>
    </div>
  );
}
