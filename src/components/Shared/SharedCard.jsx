import { useState } from "react";
import "../css/CommonCard.css";
import content3 from "/content3.jpg";
import content4 from "/content4.jpg";
import { NavLink } from "react-router-dom";

export default function SharedCard() {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  return (
    <div className="container-fluid g-0">
      <div className="row g-0">
        <div className="col-lg-6 position-relative square">
          <img src={content3} className="common-card-image" alt="..." />
          {/* on hover make this CS Case Study */}
          <div
            className="position-absolute top-0 end-0 text-center  dynamic-content m-md-3 m-xl-5"
            onMouseEnter={() => setIsHovered1(true)}
            onMouseLeave={() => setIsHovered1(false)}
          >
            {isHovered1 ? "Case Study" : "CS"}
          </div>
          <div className="position-absolute top-50 custom-start translate-middle-x">
            <h1 className="custom-card-title">Two the cloud in 24 hours</h1>
            <NavLink reloadDocument to="/insight">
              <button
                className="btn mt-xl-5 common-card-btn"
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
                  className="icon-svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.21967 14.7803C5.51256 15.0732 5.98744 15.0732 6.28033 14.7803L13.5 7.56066V13.25C13.5 13.6642 13.8358 14 14.25 14C14.6642 14 15 13.6642 15 13.25V5.75C15 5.33579 14.6642 5 14.25 5H6.75C6.33579 5 6 5.33579 6 5.75C6 6.16421 6.33579 6.5 6.75 6.5H12.4393L5.21967 13.7197C4.92678 14.0126 4.92678 14.4874 5.21967 14.7803Z"
                  />
                </svg>
              </button>
            </NavLink>
          </div>
        </div>
        <div className="col-lg-6 position-relative square">
          <img src={content4} className="common-card-image" alt="..." />
          {/* on hover make this B Blog */}
          <div
            className="position-absolute top-0 end-0 text-center dynamic-content-2 m-md-3 m-xl-5"
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
          >
            {isHovered2 ? "Blog" : "B"}
          </div>
          <div className="position-absolute custom-top custom-start-2">
            <h1 className="custom-card-title">Value Based Hiring</h1>
            <NavLink reloadDocument to="/insight">
              <button
                className="btn mt-xl-5 common-card-btn"
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
                  className="icon-svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.21967 14.7803C5.51256 15.0732 5.98744 15.0732 6.28033 14.7803L13.5 7.56066V13.25C13.5 13.6642 13.8358 14 14.25 14C14.6642 14 15 13.6642 15 13.25V5.75C15 5.33579 14.6642 5 14.25 5H6.75C6.33579 5 6 5.33579 6 5.75C6 6.16421 6.33579 6.5 6.75 6.5H12.4393L5.21967 13.7197C4.92678 14.0126 4.92678 14.4874 5.21967 14.7803Z"
                  />
                </svg>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
