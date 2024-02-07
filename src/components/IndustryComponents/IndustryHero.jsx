import industryhero from "/industryhero.png";

export default function IndustryHero() {
  return (
    <section className="container-fluid g-0">
      <div className="row g-0 position-relative">
        <img className="img-fluid talent-hero-img" src={industryhero} alt="" />
        <div className="position-absolute talent-top">
          <div className="container mx-lg-5">
            <div className="row">
              <div className="col">
                <h5 className="text-white shared-hero-main-text">
                  Public Sector
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid g-0">
          <div className="row">
            <div className="col">
              <div className="industry-hero-card position-absolute industry-bottom industry-start">
                <div className="service-card-color">
                  <h1 className="service-hero-card-text">
                    Faced with limited resources, tight deadlines, and a
                    persistent state of crisis, leaders in the public service
                    sector must carefully balance stability and speed in
                    response to ever-changing needs.
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
