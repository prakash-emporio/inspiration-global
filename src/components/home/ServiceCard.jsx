import "../css/ServiceCard.css";
const services = [
  {
    id: 1,
    header: "Product Engineering",
    detail:
      "At our core, we specialize in comprehensive product engineering services",
  },
  {
    id: 2,
    header: "Custom Development",
    detail:
      "In the dynamic landscape of today, your software must be as adaptive as your business itself",
  },
  {
    id: 3,
    header: "Cloud Services",
    detail:
      "Today's forward-thinking organizations view the cloud as a pivotal enabler of business growth",
  },
  {
    id: 4,
    header: "Data and Analytics",
    detail:
      "Our analytics services and solutions serve as a catalyst for any organization striving for growth",
  },
  {
    id: 5,
    header: "Artificial Intelligence",
    detail:
      "We are here to guide you in leveraging the formidable capabilities and adaptability of AI",
  },
  {
    id: 6,
    header: "CIO Advisory",
    detail:
      "We assist organizations in harnessing technology and innovation to shape their technology vision",
  },
  {
    id: 7,
    header: "PMO",
    detail:
      "Our pragmatic project control framework is reinforced by a robust Project Management Office",
  },
  {
    id: 8,
    header: "Security",
    detail:
      "Our extensive cybersecurity expertise, coupled with our industry knowledge, empowers us to innovate cybersecurity solutions",
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
          <div className="col-sm-6 col-lg-3 mb-lg-3" key={service.id}>
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
