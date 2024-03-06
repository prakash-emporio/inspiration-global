export default function ServicePointText({ text, points }) {
  return (
    <div className="container mt-0 mb-0">
      <div className="row">
        <div className="p-lg-5 col-lg-8 service-testimonial-text">{text}</div>
      </div>
      <div className="row">
        {points.map((point) => (
          <ul className="px-5 col-lg-8" key={point}>
            <li className="service-testimonial-text service-testimonial-point">{point}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}
