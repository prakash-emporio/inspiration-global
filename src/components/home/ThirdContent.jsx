import "../css/ThirdContent.css";
import content5 from "/content5.jpg";
import content6 from "/content6.jpg";
import playDefault from "/playDefault.svg";
import hoverPlay from "/hoverPlay.svg";

export default function ThirdContent() {
  return (
    <div>
      <div className="row g-0">
        <div className="card col-md-8">
          <img className="img-fluid" src={content5} alt="" />
          <div className="card-img-overlay">
            <h5 className="card-title custom-card-title text-center pt-5">
              Sit elementum scelerisque
            </h5>
            <div className="d-flex justify-content-center py-5">
              <img className="" src={playDefault} alt="" />
            </div>
          </div>
        </div>
        <div class="card col-md-4 position-relative">
          <img className="img-fluid" src={content6} alt="" />

          <div class="card-img-overlay">
            <div className="position-absolute top-0 end-0 text-center rounded-circle dynamic-content">
              TM
            </div>
            <div className="card-body top-50 end-10 position-absolute">
              <h1 class="card-title custom-card-title">Meet Team Member</h1>
              <p className="card-title custom-card-title">Sushant Pednekar</p>
              <button
                class="btn px-4 me-md-2 common-card-btn"
                href="#"
                role="button"
              >
                Meet
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.21967 5.21967C4.92678 5.51256 4.92678 5.98744 5.21967 6.28033L12.4393 13.5L6.75 13.5C6.33579 13.5 6 13.8358 6 14.25C6 14.6642 6.33579 15 6.75 15L14.25 15C14.6642 15 15 14.6642 15 14.25L15 6.75C15 6.33579 14.6642 6 14.25 6C13.8358 6 13.5 6.33579 13.5 6.75L13.5 12.4393L6.28033 5.21967C5.98744 4.92678 5.51256 4.92678 5.21967 5.21967Z"
                    fill="#5912E4"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
