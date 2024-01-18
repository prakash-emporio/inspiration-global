import serviceHero from "/serviceHero.png";
import "./ServiceHero.css";

export default function ServicesHero() {
  return (
    <section className="hero-banner">
      <div className="row">
        <div className="position-relative">
          <img className="w-100" src={serviceHero} alt="" />
          <div className="position-absolute software-top">
            <div className="mx-5 px-5 card bg-transparent">
              <div className="card-body">
                <h5 className="text-white software-hero-main-text">
                  Product Engineering
                </h5>
              </div>
            </div>
          </div>
          <div className="position-absolute top-100 start-50 translate-middle-service">
            <div className="service-card-color">
              <div className="card-body">
                <h1 className="service-hero-card-text">
                  We provide comprehensive product and platform engineering
                  services that address the full technology stack.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
