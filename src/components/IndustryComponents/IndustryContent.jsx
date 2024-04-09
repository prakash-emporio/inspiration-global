import parse from "html-react-parser";
import "./industry.css";

export default function IndustryContent({ text, index, bodyImg }) {
  const isThirdPosition = index === 1;
  const first = index === 1;

  return (
    <>
      <div
        className={`container mb-0 mt-0 my-1 my-md-5 ${
          first ? "service-content-custom-margin" : ""
        }`}
      >
        {parse(text)}
      </div>
      {isThirdPosition && (
        <div className="container mb-0 mt-0">
          <img
            className="img-fluid"
            src={bodyImg}
            alt="Alternate Text"
          />
        </div>
      )}
    </>
  );
}
