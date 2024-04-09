import "./ServicesCard.css";

export default function ServiceSectionCard({ cards, heading }) {
  return (
    <div className="container my-5">
      <h1 className="text-center text-black service-card-heading">{heading}</h1>
      <div className="py-lg-5 row">
        {cards.map((service, index) => (
          <div key={index} className="col-md-6 col-lg-4 col-xxl-3 p-3">
            <div className="card service-card-section">
              <div className="card-body service-page-card-section-body service-card-body">
                <h5 className="card-title service-card-section-title">
                  {service.services_in_service_title}
                </h5>
                <p className="card-text service-card-section-text-size">
                  {service.services_in_service_description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
