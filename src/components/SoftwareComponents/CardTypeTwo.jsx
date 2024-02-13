import { useState } from "react";
import "./CardSection.css";

export default function CardTypeTwo({ image, title, content }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 250;
  const trimmedContent =
    content.length > maxLength
      ? content.substring(0, maxLength) + "..."
      : content;

  return (
    <div className="container-fluid g-0 my-5">
      <div className="row g-0">
        <div className="col-12 col-lg-4 software-card-section-content-wrapper-two section-two">
          <div className="card my-5 card-section-card-box">
            <div className="my-4 px-5">
              <h2 className="software-card-section-title">{title}</h2>
              <p className="software-card-section-text pt-4">
                {isExpanded ? content : trimmedContent}
              </p>
              {content.length > maxLength && (
                <button
                  type="button"
                  className="btn software-btn my-3"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? "Learn Less" : "Learn More"}
                  {isExpanded ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      className="ms-2 software-svg-icon"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.21967 14.7803C5.51256 15.0732 5.98744 15.0732 6.28033 14.7803L13.5 7.56066V13.25C13.5 13.6642 13.8358 14 14.25 14C14.6642 14 15 13.6642 15 13.25V5.75C15 5.33579 14.6642 5 14.25 5H6.75C6.33579 5 6 5.33579 6 5.75C6 6.16421 6.33579 6.5 6.75 6.5H12.4393L5.21967 13.7197C4.92678 14.0126 4.92678 14.4874 5.21967 14.7803Z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="ms-2 software-svg-icon"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.7803 5.21967C14.4874 4.92678 14.0126 4.92678 13.7197 5.21967L6.5 12.4393L6.5 6.75C6.5 6.33579 6.16421 6 5.75 6C5.33579 6 5 6.33579 5 6.75L5 14.25C5 14.6642 5.33579 15 5.75 15L13.25 15C13.6642 15 14 14.6642 14 14.25C14 13.8358 13.6642 13.5 13.25 13.5L7.56066 13.5L14.7803 6.28033C15.0732 5.98744 15.0732 5.51256 14.7803 5.21967Z"
                      />
                    </svg>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-8 software-card-section-image-wrapper-two section-one">
          <img className="img-fluid" src={image} alt="" />
        </div>
      </div>
    </div>
  );
}
