import "./TalentFeatureSection.css";

export default function TalentFeatureSection() {
  return (
    <div className="talent-feature-section-wrapper">
      <h1 className="talent-feature-section-header p-5">
        Our Engagement Models
      </h1>
      <div className="d-flex gap-2">
        <div className="card bg-transparent mb-3 mx-2">
          <div className="card-body">
            <h5 className="card-title talent-feature-section-card-title">
              Contract Staffing:
            </h5>
            <p className="card-text talent-feature-section-card-text">
              Temporary IT professionals
            </p>
          </div>
        </div>
        <div className="card bg-transparent mb-3 mx-2">
          <div className="card-body">
            <h5 className="card-title talent-feature-section-card-title">
              Contract- to-Hire:
            </h5>
            <p className="card-text talent-feature-section-card-text">
              Proven resources for direct hiring
            </p>
          </div>
        </div>
        <div className="card bg-transparent mb-3 mx-2">
          <div className="card-body">
            <h5 className="card-title talent-feature-section-card-title">
              Direct Hires:
            </h5>
            <p className="card-text talent-feature-section-card-text">
              Professionals who have mastered processes and technology
            </p>
          </div>
        </div>
        <div className="card bg-transparent mb-3 mx-2">
          <div className="card-body">
            <h5 className="card-title talent-feature-section-card-title">
              Executive Search:
            </h5>
            <p className="card-text talent-feature-section-card-text">
              Identifying and sourcing senior talent
            </p>
          </div>
        </div>
        <div className="card bg-transparent mb-3 mx-2">
          <div className="card-body">
            <h5 className="card-title talent-feature-section-card-title">
              Project Staffing:
            </h5>
            <p className="card-text talent-feature-section-card-text">
              Complete project and talent management
            </p>
          </div>
        </div>
      </div>
      <h1 className="talent-feature-section-header m-5 p-5">
        Our Time-tested Process
      </h1>
    </div>
  );
}
