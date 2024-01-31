// Extracting the common card component
const TalentFeatureCard = ({ title, description }) => (
  <div className="col-12 col-md-6 col-lg">
    <div className="card bg-transparent">
      <div className="card-body">
        <h5 className="card-title talent-feature-section-card-title-0">
          {title}
        </h5>
        <p className="card-text talent-feature-section-card-text-0">
          {description}
        </p>
      </div>
    </div>
  </div>
);

// Main dynamic component
const TalentFeatureSection = () => {
  const engagementModels = [
    { title: "Contract Staffing", description: "Temporary IT professionals" },
    {
      title: "Contract-to-Hire",
      description: "Proven resources for direct hiring",
    },
    {
      title: "Direct Hires",
      description: "Professionals who have mastered processes and technology",
    },
    {
      title: "Executive Search",
      description: "Identifying and sourcing senior talent",
    },
    {
      title: "Project Staffing",
      description: "Complete project and talent management",
    },
  ];

  return (
    <div className="container">
      <h1 className="talent-feature-section-header py-5">
        Our Engagement Models
      </h1>
      <div className="row">
        {engagementModels.map((model, index) => (
          <TalentFeatureCard
            key={index}
            title={model.title}
            description={model.description}
          />
        ))}
      </div>
    </div>
  );
};

export default TalentFeatureSection;
