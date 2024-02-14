import { NavLink } from "react-router-dom";
import "../css/ImpactTalent.css";


export default function TalentCard({title, description, buttonText, image}) {
  const paragraphs = description.split("\n");
  return (
    <div
      // data-aos="fade-left"
      // data-aos-duration="2000"
      // data-aos-offset="300"
      // data-aos-easing="ease-in-sine"
      className="card card-wrapper content-text-wrapper card-wrapper-color-2"
    >
      <div className="container-fluid g-0">
        <div className="row g-0">
          <div className="col-lg-4 section-two">
            <div className="card-body second-content-card-body">
              <h1 className="card-title-2 p-lg-5">
                {title}
              </h1>
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="card-text-2">
                  {paragraph}
                </p>
              ))}
              <NavLink to="/talent">
                <button className="btn second-btn" href="#" role="button">
                  {buttonText}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="ms-2 second-content-svg"
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
          <div className="col-lg-8 section-one">
            <img
              src={image}
              className="img-fluid content-image-1"
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
