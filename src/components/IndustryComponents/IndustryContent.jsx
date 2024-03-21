import "./industry.css"


export default function IndustryContent({ text, index, bodyImg }) {
  const isThirdPosition = index === 2;
  const even = index % 2 === 0;
  const first = index === 1;

  return (
    <>
      <div
        className={`container mb-0 mt-0 my-1 my-md-5 ${
          first ? "service-content-custom-margin" : ""
        }`}
      >
        <div
          className={`row g-0 ${
            even ? "justify-content-end" : "justify-content-between"
          } `}
        >
          {text && (
            <p
              className={`${
                first ? "col-md-6" : "col-lg-7"
              } service-testimonial-text`}
            >
              {text}
            </p>
          )}
        </div>
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
