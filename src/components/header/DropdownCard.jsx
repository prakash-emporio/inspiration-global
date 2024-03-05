import { useNavigate } from "react-router-dom";

export default function DropdownCard({ title, text, buttonName, route }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate(route);
  }
  return (
    <div className="col-5">
      <div className="card card-dropdown-margin">
        <div className="">
          <h5 className="card-title card-title-size">{title}</h5>
          <p className="card-text my-card-text">{text}</p>
          <button
            onClick={handleClick}
            className="btn mega-header-btn"
            href="#"
            role="button"
          >
            {buttonName}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              className="icon-svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.21967 9.78033C0.512563 10.0732 0.987437 10.0732 1.28033 9.78033L8.5 2.56066L8.5 8.25C8.5 8.66421 8.83579 9 9.25 9C9.66421 9 10 8.66421 10 8.25L10 0.75C10 0.335787 9.66421 0 9.25 0L1.75 0C1.33579 0 1 0.335787 1 0.75C1 1.16421 1.33579 1.5 1.75 1.5L7.43934 1.5L0.21967 8.71967C-0.0732233 9.01256 -0.0732233 9.48744 0.21967 9.78033Z"
                fill="#5912E4"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
