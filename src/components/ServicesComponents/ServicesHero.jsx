import serviceHero from "/serviceHero.png";
import "./ServiceHero.css";

export default function ServicesHero() {
  return (
    <section className="container-fluid g-0">
      <div className="row g-0 position-relative">
        <img className="img-fluid" src={serviceHero} alt="" />
        <div className="position-absolute service-top">
          <div className="container mx-lg-5 px-lg-5">
            <div className="row">
              <div className="col-6">
                <h5 className="text-white shared-hero-main-text">
                  Product Engineering
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid g-0">
          <div className="row">
            <div className="col">
              <div className="position-absolute service-hero-card">
                <div className="service-card-color">
                  <h1 className="service-hero-card-text">
                    We provide comprehensive product and platform engineering
                    services that address the full technology stack.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
