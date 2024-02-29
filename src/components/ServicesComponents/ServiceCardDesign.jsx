import { useState } from "react";

export default function ServiceCardDesign({ title, description, list }) {
  const [showList, setShowList] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const toggleList = () => {
    setShowList(!showList);
    setIsButtonClicked(!isButtonClicked);
  };

  return (
    <div className="col-md-6 col-lg-4 col-xxl-3 p-3">
      <div className={`card service-card-section ${showList ? "expanded" : ""}`}>
        <div className="card-body service-page-card-section-body service-card-body">
          <h5 className="card-title service-card-section-title">{title}</h5>
          <p className="card-text service-card-section-text-size">
            {description}
          </p>
          {showList && (
            <ul className="card-text service-card-section-text-size">
              {list.map((item, index) => (
                <li className="service-card-li" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          )}
          <div className="d-flex justify-content-end">
            <button
              type="button"
              className="service-card-btn-color border-0"
              onClick={toggleList}
            >
              {isButtonClicked ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M5.21967 13.7197C4.92678 14.0126 4.92678 14.4874 5.21967 14.7803C5.51256 15.0732 5.98744 15.0732 6.28033 14.7803L10 11.0607L13.7197 14.7803C14.0126 15.0732 14.4874 15.0732 14.7803 14.7803C15.0732 14.4874 15.0732 14.0126 14.7803 13.7197L11.0607 10L14.7803 6.28033C15.0732 5.98744 15.0732 5.51256 14.7803 5.21967C14.4874 4.92678 14.0126 4.92678 13.7197 5.21967L10 8.93934L6.28033 5.21967C5.98744 4.92678 5.51256 4.92678 5.21967 5.21967C4.92678 5.51256 4.92678 5.98744 5.21967 6.28033L8.93934 10L5.21967 13.7197Z"
                    fill="#5912E4"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.7803 5.21967C14.4874 4.92678 14.0126 4.92678 13.7197 5.21967L6.5 12.4393L6.5 6.75C6.5 6.33579 6.16421 6 5.75 6C5.33579 6 5 6.33579 5 6.75L5 14.25C5 14.6642 5.33579 15 5.75 15L13.25 15C13.6642 15 14 14.6642 14 14.25C14 13.8358 13.6642 13.5 13.25 13.5L7.56066 13.5L14.7803 6.28033C15.0732 5.98744 15.0732 5.51256 14.7803 5.21967Z"
                    fill="#5912E4"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
