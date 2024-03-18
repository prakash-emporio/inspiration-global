import { useState } from "react";
import "./CardSection.css";

export default function CardConsulting({ image, title, content }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 250;
  const trimmedContent =
    content.length > maxLength
      ? content.substring(0, maxLength) + "..."
      : content;
  return (
    <div className="container-fluid g-0 my-5">
      <div className="row g-0 align-items-center">
        <div className="col-12 col-lg-8 software-card-section-image-wrapper">
          <img className="img-fluid" src={image} alt="software hero img" />
        </div>
        <div className="col-12 col-lg-4 software-card-section-content-wrapper">
          <div className="card card-section-card-box">
            <div className="px-5">
              <h2 className="software-card-section-title my-md-5">{title}</h2>
              <p className="software-card-section-text">
                {isExpanded ? content : trimmedContent}
              </p>
              {content.length > maxLength && (
                <button
                  type="button"
                  className="btn software-btn my-md-5 mx-3"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? "Learn Less" : "Learn More"}
                  {isExpanded ? (
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="software-svg-icon"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.21967 9.78033C0.512563 10.0732 0.987437 10.0732 1.28033 9.78033L8.5 2.56066V8.25C8.5 8.66421 8.83579 9 9.25 9C9.66421 9 10 8.66421 10 8.25V0.75C10 0.335787 9.66421 0 9.25 0H1.75C1.33579 0 1 0.335787 1 0.75C1 1.16421 1.33579 1.5 1.75 1.5H7.43934L0.21967 8.71967C-0.0732233 9.01256 -0.0732233 9.48744 0.21967 9.78033Z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="software-svg-icon"
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
              <a href="#contactForm">
                <button
                  type="button"
                  className="btn software-sales-btn my-3 mx-lg-5"
                >
                  Contact Sales
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="software-sales-svg-icon"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.21967 9.78033C0.512563 10.0732 0.987437 10.0732 1.28033 9.78033L8.5 2.56066V8.25C8.5 8.66421 8.83579 9 9.25 9C9.66421 9 10 8.66421 10 8.25V0.75C10 0.335787 9.66421 0 9.25 0H1.75C1.33579 0 1 0.335787 1 0.75C1 1.16421 1.33579 1.5 1.75 1.5H7.43934L0.21967 8.71967C-0.0732233 9.01256 -0.0732233 9.48744 0.21967 9.78033Z"
                    />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
