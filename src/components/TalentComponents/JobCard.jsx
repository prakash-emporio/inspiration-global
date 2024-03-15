import "./jobcard.css";

export default function JobCard({ title, description }) {
  const truncatedDescription = description.slice(0, 200) + "...";

  return (
    <div className="card service-card-section">
      <div className="card-body service-page-card-section-body service-card-body job-card-body">
        <h5 className="card-title service-card-section-title">{title}</h5>
        <p className="card-text service-card-section-text-size">
          {truncatedDescription}
        </p>
      <div className="d-flex justify-content-end align-items-end mt-5">
      <button className="btn job-card-btn">
          View Details
        </button>
      </div>
      </div>
    </div>
  );
}
