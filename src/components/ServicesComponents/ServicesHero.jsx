import "./ServiceHero.css";
import "./ServicesText.css";

export default function ServicesHero({heroImage, heroTitle, heroHeadline}) {
  return (
    <section className="container-fluid g-0">
      <div className="row g-0 position-relative">
        <img className="img-fluid service-hero-img" src={heroImage} alt="" />
        <div className="position-absolute service-top">
          <div className="container mx-lg-5 px-lg-5">
            <div className="row">
              <div className="col-lg-6">
                <h5 className="text-white shared-hero-main-text">
                  {heroTitle}
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
                    {heroHeadline}
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
