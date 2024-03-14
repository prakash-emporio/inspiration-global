import "./ServiceContent.css";
import "./ServiceHero.css";

export default function ServiceContent({ text, index, points }) {
  const even = index % 2 === 0;
  const isBold = index === 2;
  const isFirst = index === 1;
  return (
    <>
      {isFirst && (
        <>
          <div className="row g-0 justify-content-between my-2 my-lg-5">
            {text && (
              <p
                className={`${
                  isFirst ? "col-lg-6" : "col-lg-7"
                } service-testimonial-text`}
              >
                {text}
              </p>
            )}
          </div>
          {points && (
            <ul className="col-lg-8">
              {points.map((point, index) => (
                <li
                  className="service-testimonial-text service-testimonial-point py-md-2"
                  key={index}
                >
                  {point}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
      {!even && !isFirst && (
        <>
          <div className="row g-0 justify-content-between my-2 my-lg-5">
            {text && (
              <p className="col-lg-7 service-testimonial-text">{text}</p>
            )}
          </div>
          {points && (
            <ul className="col-lg-8">
              {points.map((point, index) => (
                <li
                  className="service-testimonial-text service-testimonial-point py-md-2"
                  key={index}
                >
                  {point}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
      {even && (
        <>
          <div className="row g-0 justify-content-end my-2 my-lg-5">
            {text && (
              <p
                className={`col-lg-7 service-testimonial-text ${
                  isBold ? "service-testimonial-bold-text" : ""
                }`}
              >
                {text}
              </p>
            )}
          </div>
          {points && (
            <ul className="col-lg-8">
              {points.map((point, index) => (
                <li
                  className="service-testimonial-text service-testimonial-point py-md-2"
                  key={index}
                >
                  {point}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </>
  );
}
