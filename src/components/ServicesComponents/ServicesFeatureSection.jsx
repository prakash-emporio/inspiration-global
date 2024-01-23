import "./ServiceFeatureSection.css";

const stepsData = [
  {
    title: "Discovery & Strategy Workshops",
    description:
      "Discovery of the project vision, goals, requirements, OKR’s, KPI’s and risks. The output of the sessions to be documented.",
    number: 1,
  },
  {
    title: "Discovery & Strategize, Design & Solutioning",
    description:
      "Collaborate to strategize the design and development of the product or application. Sprint planning and User Stories are developed.",
    number: 2,
  },
  {
    title: "Build, Test & Go-Live",
    description:
      "Planned Sprints begin the design and build process with weekly or bi-weekly schedules agreed to. Increment releases occur as per plan.",
    number: 3,
  },
];

export default function ServicesFeatureSection() {
  return (
    <div className="service-feature-section-wrapper">
      <h1 className="p-5 text-center text-white service-feature-section-header">
        Steps to Success
      </h1>
      <div className="row g-0 col-wrapper">
        {stepsData.map((step, index) => (
          <div className="col" key={index}>
            <div className="card service-feature-section-card-wrapper">
              <div className="card-body">
                <h5 className="card-title p-3 service-feature-section-card-title">
                  {step.title}
                </h5>
                <p className="card-text p-3 service-feature-section-card-text">
                  {step.description}
                </p>
                <p className="p-3 service-feature-section-card-number">
                  {step.number}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
