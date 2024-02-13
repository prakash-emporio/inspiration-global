export default function ServicePointText({ text, points }) {
  return (
    <div className="container">
      <div className="row">
        <div className="p-lg-5 col-lg-8 service-testimonial-text">{text}</div>
      </div>
      <div className="row">
        {points.map((point) => (
          <ul className="px-lg-5 col-lg-8 " key={point}>
            <li className="service-testimonial-text">
            {point}
          </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
