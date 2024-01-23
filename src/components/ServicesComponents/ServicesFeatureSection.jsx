import "./ServiceFeatureSection.css";

const stepsData = [
  {
    title: "Discovery & Strategy Workshops",
    description:
      "Discovery of the project vision, goals, requirements, OKR’s, KPI’s and risks. The output of the sessions to be documented.",
    number: 1,
  },
  {
    title: "Strategize, Design & Solutioning",
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
      <div className="row g-0">
        {stepsData.map((step, index) => (
          <div className="col" key={index}>
            <div className="card service-feature-section-card-wrapper">
              <div className="card-body">
                <h5 className="card-title px-5 service-feature-section-card-title">
                  {step.title}
                </h5>
                <p className="card-text pt-5 px-3 service-feature-section-card-text">
                  {step.description}
                </p>
                <p className="service-feature-section-card-number">
                  {step.number}
                </p>
                <button className="service-feature-section-card-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    className="service-feature-section-card-svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.23962 15C8.23962 15.4142 8.5754 15.75 8.98962 15.75L19.1998 15.75L15.1768 19.7729C14.8839 20.0658 14.8839 20.5407 15.1768 20.8336C15.4697 21.1265 15.9446 21.1265 16.2375 20.8336L21.5408 15.5303C21.8337 15.2374 21.8337 14.7625 21.5408 14.4696L16.2375 9.16634C15.9446 8.87345 15.4697 8.87345 15.1768 9.16634C14.8839 9.45923 14.8839 9.93411 15.1768 10.227L19.1998 14.25L8.98962 14.25C8.5754 14.25 8.23962 14.5858 8.23962 15Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
