import { NavLink } from "react-router-dom";
import "../css/ServiceCard.css";

export default function ServiceCard({ services }) {
  return (
    <div className="container text-center">
      <div className="row g-0">
        <div className="col">
          <h1 className="text-dark my-md-5 service-header">Our Services</h1>
        </div>
      </div>
      <div className="row mb-5">
        {services.map((service) => (
          <div className="col-sm-6 col-lg-4 col-xxl-3 mb-lg-3" key={service.id}>
            <div className="card my-3">
              <NavLink reloadDocument to={service.link} className="not-active">
                <div className="card-body service-card-section-body">
                  <h5 className="card-title card-title-color">
                    {service.title}
                  </h5>
                  <p className="card-text service-card-text">
                    {service.description}
                  </p>
                </div>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
