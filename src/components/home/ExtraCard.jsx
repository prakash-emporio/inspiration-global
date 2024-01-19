import "../css/CommonCard.css";
import content7 from "/content7.jpg";
import content8 from "/content8.jpg";

export default function ExtraCard() {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-6 position-relative">
          <img src={content7} className="img-fluid" alt="..." />
          <div className="position-absolute top-0 end-0 text-center rounded-circle dynamic-content">BG</div>
          <div className="position-absolute top-50 start-50 translate-middle-x">
            <h1 className="card-title custom-card-title">Leveraging GenAI in your company</h1>
            <button
              className="btn px-4 me-md-2 common-card-btn"
              href="#"
              role="button"
            >
              Read more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="ms-2 icon-svg"
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
        <div className="col-md-6 position-relative">
          <img src={content8} className="img-fluid custom-image" alt="..." />
          <div className="position-absolute top-0 end-0 text-center rounded-circle dynamic-content">CS</div>
          <div className="position-absolute top-50 start-50 translate-middle-x">
            <h1 className="card-title custom-card-title">How does AI help the Public Sector</h1>
            <button
              className="btn px-4 me-md-2 common-card-btn"
              href="#"
              role="button"
            >
              Read more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="ms-2 icon-svg"
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
    </div>
  );
}
