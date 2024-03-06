export default function ServiceSpecialText({ text, points }) {
  return (
    <div className="container mt-0 mb-0">
      <div className="row">
        <div className="p-lg-5 col-lg-8 service-testimonial-text service-testimonial-bold-text">{text}</div>
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
  )
}
