import "./industry.css";

export default function IndustryHero({ heroImage, heroTitle, heroHeadline }) {
  return (
    <section className="container-fluid g-0">
      <div className="row g-0 position-relative">
        <img className="img-fluid talent-hero-img" src={heroImage} alt="" />
        <div className="position-absolute talent-top">
          <div className="container mx-lg-5">
            <div className="row">
              <div className="col">
                <h5 className="text-white shared-hero-main-text px-md-5">
                  {heroTitle}
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid g-0">
          <div className="row g-0">
            <div className="col">
              <div className="industry-hero-card position-absolute industry-bottom industry-start">
                <div className="service-card-color">
                  <h1 className="service-hero-card-text">{heroHeadline}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
