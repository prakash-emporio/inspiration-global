import "../css/SecondContent.css";
import content2 from "/content2.jpg";

const SecondContentData = {
  title: "All About Talent",
  text1:
    "Great talent is the equalizer and when combined with sound strategy, technology and data, they are revolutionizing every aspect of business, including competition, value definition, delivery, and transformation to achieve optimal outcomes.",
  text2:
    "These advances have become more critical than ever, given the unprecedented uncertainty and volatility in today's business landscape. To navigate todays challenges successfully, businesses across all industries must embrace new levels of innovation and undergo digital & talent transformation.",
  buttonText: "Learn More",
  buttonIcon: (
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
        d="M5.21967 5.21967C4.92678 5.51256 4.92678 5.98744 5.21967 6.28033L12.4393 13.5L6.75 13.5C6.33579 13.5 6 13.8358 6 14.25C6 14.6642 6.33579 15 6.75 15L14.25 15C14.6642 15 15 14.6642 15 14.25L15 6.75C15 6.33579 14.6642 6 14.25 6C13.8358 6 13.5 6.33579 13.5 6.75L13.5 12.4393L6.28033 5.21967C5.98744 4.92678 5.51256 4.92678 5.21967 5.21967Z"
        fill="#A1F157"
      />
    </svg>
  ),
  image: content2,
};

export default function SecondContent() {
  return (
    <div className="card card-wrapper card-wrapper-color-2">
      <div className="container-fluid">
        <div className="row g-0">
          <div className="col-md-4 content-text-wrapper">
            <div className="card-body">
              <h1 className="card-title card-title-2">{SecondContentData.title}</h1>
              <p className="card-text card-text-2">{SecondContentData.text1}</p>
              <p className="card-text card-text-2">{SecondContentData.text2}</p>
              <button className="btn px-4 me-md-2 second-btn" href="#" role="button">
                {SecondContentData.buttonText}
                {SecondContentData.buttonIcon}
              </button>
            </div>
          </div>
          <div className="col-md-8">
            <img
              src={SecondContentData.image}
              className="img-fluid content-image-1"
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
