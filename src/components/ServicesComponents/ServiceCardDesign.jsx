export default function ServiceCardDesign({ title, description }) {
  return (
    <div className="col-md-6 col-lg-4 col-xxl-3 p-3">
      <div className="card service-card-section">
        <div className="card-body service-page-card-section-body service-card-body">
          <h5 className="card-title service-card-section-title">{title}</h5>
          <p className="card-text service-card-section-text-size">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
