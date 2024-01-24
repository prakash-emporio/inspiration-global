import "../css/ThirdContent.css";
import content5 from "/content5.png";
import content6 from "/content6.png";
import playDefault from "/playDefault.svg";
import { useState } from "react";

export default function ThirdContent() {
  const [isHovered1, setIsHovered1] = useState(false);
  return (
    <div>
      <div className="row g-0">
        <div className="card col-md-8">
          <img
            className="img-fluid third-card-custom-img"
            src={content5}
            alt=""
          />
          <div className="card-img-overlay">
            <h5 className="card-title custom-card-title text-center pt-5">
              Sit elementum scelerisque
            </h5>
            <div className="d-flex justify-content-center py-5">
              <img className="" src={playDefault} alt="" />
            </div>
          </div>
        </div>
        <div className="card col-md-4 position-relative">
          <img
            className="img-fluid"
            src={content6}
            alt="sushant padnekar"
          />

          <div className="card-img-overlay third-card-custom-img">
            <div
              className="position-absolute top-0 end-0 text-center dynamic-content m-5"
              onMouseEnter={() => setIsHovered1(true)}
              onMouseLeave={() => setIsHovered1(false)}
            >
              {isHovered1 ? "Team" : "T"}
            </div>
            <div className="card-body top-50  position-absolute">
              <h1 className="card-title custom-card-title third-card-font-size">
                Meet Team Member
              </h1>
              <p className="card-title custom-card-title">
                Sushant <br /> Pednekar
              </p>
              <button
                className="btn mt-3 common-card-btn"
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
                  className="ms-2 icon-svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.21967 5.21967C4.92678 5.51256 4.92678 5.98744 5.21967 6.28033L12.4393 13.5L6.75 13.5C6.33579 13.5 6 13.8358 6 14.25C6 14.6642 6.33579 15 6.75 15L14.25 15C14.6642 15 15 14.6642 15 14.25L15 6.75C15 6.33579 14.6642 6 14.25 6C13.8358 6 13.5 6.33579 13.5 6.75L13.5 12.4393L6.28033 5.21967C5.98744 4.92678 5.51256 4.92678 5.21967 5.21967Z"
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
