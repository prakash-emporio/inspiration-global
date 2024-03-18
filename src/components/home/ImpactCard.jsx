import { NavLink } from "react-router-dom";
import "../css/ImpactTalent.css";

export default function ImpactCard({ title, description, buttonText, image }) {
  const paragraphs = description.split("\n");
  return (
    <div className="card-wrapper content-text-wrapper card-wrapper-color-1">
      <div className="container-fluid g-0">
        <div className="row g-0">
          <div className="col-lg-8">
            <img src={image} className="img-fluid content-image" alt="..." />
          </div>
          <div className="col-lg-4">
            <div className="card-body first-content-card-body">
              <h1 className="card-title-1 p-lg-5">{title}</h1>
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="card-text-1">
                  {paragraph}
                </p>
              ))}
              <NavLink reloadDocument to="/services/product-engineering">
                <button className="btn first-btn" href="#" role="button">
                  {buttonText}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="first-content-svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.7803 5.21967C14.4874 4.92678 14.0126 4.92678 13.7197 5.21967L6.5 12.4393L6.5 6.75C6.5 6.33579 6.16421 6 5.75 6C5.33579 6 5 6.33579 5 6.75L5 14.25C5 14.6642 5.33579 15 5.75 15L13.25 15C13.6642 15 14 14.6642 14 14.25C14 13.8358 13.6642 13.5 13.25 13.5L7.56066 13.5L14.7803 6.28033C15.0732 5.98744 15.0732 5.51256 14.7803 5.21967Z"
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
