import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/ThirdContent.css";
import videoThumbnail from "/videothumbnail.png";

export default function VideoCard({
  videoTitle,
  cardTitle,
  cardImage,
  cardDescription,
  cardButtonText,
}) {
  const [isHovered1, setIsHovered1] = useState(false);

  const navigate = useNavigate();

  function handleClick() {
    navigate("/industry/pe-vc");
  }

  return (
    <div className="container-fluid g-0">
      <div className="row g-0">
        <div
          className="card custom-video-card col-lg-9 gap-0"
          onClick={handleClick}
        >
          <div className="card-img-overlay">
            <h5 className="card-title video-card-title text-center pt-lg-5">
              {videoTitle}
            </h5>
          </div>
          <img
            className="third-content-img"
            src={videoThumbnail}
            alt="Thumbnail"
          />
        </div>
        <div className="card col-lg-3 position-relative square">
          <img
            className="img-fluid third-content-img"
            src={cardImage}
            alt="sushant padnekar"
          />
          <div className="card-img-overlay">
            <div
              className="position-absolute top-0 end-0 text-center dynamic-content-2 m-xl-5"
              onMouseEnter={() => setIsHovered1(true)}
              onMouseLeave={() => setIsHovered1(false)}
            >
              {isHovered1 ? "Team" : "T"}
            </div>
            <div className="card-body top-50 third-custom-top position-absolute">
              <h1 className="custom-card-title third-card-font-size">
                {cardTitle}
              </h1>
              <p className="custom-card-title third-card-font-size-two">
                {cardDescription}
              </p>
              <NavLink reloadDocument to="/company">
                <button className="btn common-card-btn" href="#" role="button">
                  {cardButtonText}
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="icon-svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.21967 5.21967C4.92678 5.51256 4.92678 5.98744 5.21967 6.28033L12.4393 13.5L6.75 13.5C6.33579 13.5 6 13.8358 6 14.25C6 14.6642 6.33579 15 6.75 15L14.25 15C14.6642 15 15 14.6642 15 14.25L15 6.75C15 6.33579 14.6642 6 14.25 6C13.8358 6 13.5 6.33579 13.5 6.75L13.5 12.4393L6.28033 5.21967C5.98744 4.92678 5.51256 4.92678 5.21967 5.21967Z"
                    />
                  </svg>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
