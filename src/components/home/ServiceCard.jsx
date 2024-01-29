import "../css/ServiceCard.css";
const services = [
  {
    id: 1,
    header: "Product Engineering",
    detail:
      "Ut nulla sociis vulputate iaculis sagittis tellus iaculis auctor facilisis. Nunc tincidunt sagittis.",
  },
  {
    id: 2,
    header: "Custom Development",
    detail:
      "Ut nulla sociis vulputate iaculis sagittis tellus iaculis auctor facilisis. Nunc tincidunt sagittis.",
  },
  {
    id: 3,
    header: "Cloud Services",
    detail:
      "Ut nulla sociis vulputate iaculis sagittis tellus iaculis auctor facilisis. Nunc tincidunt sagittis.",
  },
  {
    id: 4,
    header: "Data and Analytics",
    detail:
      "Ut nulla sociis vulputate iaculis sagittis tellus iaculis auctor facilisis. Nunc tincidunt sagittis.",
  },
  {
    id: 5,
    header: "Artificial Intelligence",
    detail:
      "Ut nulla sociis vulputate iaculis sagittis tellus iaculis auctor facilisis. Nunc tincidunt sagittis.",
  },
  {
    id: 6,
    header: "CIO Advisory",
    detail:
      "Ut nulla sociis vulputate iaculis sagittis tellus iaculis auctor facilisis. Nunc tincidunt sagittis.",
  },
  {
    id: 7,
    header: "PMO",
    detail:
      "Ut nulla sociis vulputate iaculis sagittis tellus iaculis auctor facilisis. Nunc tincidunt sagittis.",
  },
  {
    id: 8,
    header: "Security",
    detail:
      "Ut nulla sociis vulputate iaculis sagittis tellus iaculis auctor facilisis. Nunc tincidunt sagittis.",
  },
];

export default function ServiceCard() {
  return (
    <div className="container text-center">
      <div className="row g-0">
        <div className="col">
          <h1 className="text-dark my-5 service-header">Our Services</h1>
        </div>
      </div>
      <div className="row mb-5">
        {services.map((service) => (
          <div className="col-12 col-sm-6 col-lg-3" key={service.id}>
            <div className="card my-3">
              <div className="card-body service-card-section-body">
                <h5 className="card-title card-title-color">
                  {service.header}
                </h5>
                <p className="card-text service-card-text">{service.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
