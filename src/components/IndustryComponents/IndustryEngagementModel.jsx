export default function IndustryEngagementModel({ title, description }) {
  return (
    <div className="col-md-6 col-lg">
      <div className="card bg-transparent">
        <div className="card-body">
          <h5 className="card-title talent-feature-section-card-title-0 t-card-title">
            {title}
          </h5>
          <p className="card-text industry-feature-section-card-text t-care-card-text">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
