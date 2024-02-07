import talentHero from "/talentHero.png";
import "./TalentHero.css";


export default function TalentHero() {
  return (
    <section className="container-fluid g-0">
      <div className="row g-0 position-relative">
        <img className="img-fluid talent-hero-img" src={talentHero} alt="" />
        <div className="position-absolute talent-top">
          <div className="container mx-lg-5 px-lg-5">
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <h5 className="text-white shared-hero-main-text">
                  Talent Procurement and Professional Services
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid g-0">
          <div className="row">
            <div className="col">
              <div className="position-absolute talent-hero-card">
                <div className="service-card-color">
                  <h1 className="service-hero-card-text">
                    Our solutions empower you to promptly meet your staffing
                    needs with professionals possessing the requisite expertise
                    for contemporary, intricate IT roles.
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
