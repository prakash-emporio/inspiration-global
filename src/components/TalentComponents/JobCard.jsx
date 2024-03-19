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
          <button className="btn job-card-btn-two">
            View Details
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="job-svg-icon"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.21967 14.7803C5.51256 15.0732 5.98744 15.0732 6.28033 14.7803L13.5 7.56066V13.25C13.5 13.6642 13.8358 14 14.25 14C14.6642 14 15 13.6642 15 13.25V5.75C15 5.33579 14.6642 5 14.25 5H6.75C6.33579 5 6 5.33579 6 5.75C6 6.16421 6.33579 6.5 6.75 6.5H12.4393L5.21967 13.7197C4.92678 14.0126 4.92678 14.4874 5.21967 14.7803Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
