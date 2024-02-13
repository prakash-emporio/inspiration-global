import ServiceCardDesign from "./ServiceCardDesign";
import "./ServicesCard.css";


export default function ServiceSectionCard({cards}) {
  return (
    <div className="container my-5">
      <h1 className="text-center text-black service-card-heading">
        Product Engineering Services
      </h1>
      <div className="py-lg-5 row">
        {cards.map((service) => (
          <ServiceCardDesign key={service.idx} {...service} />
        ))}
      </div>
    </div>
  )
}
