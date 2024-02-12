import "./SoftwareHero.css";

export default function SoftwareHero({heroImage, heroheader, heroSubheader, heroLogo}) {

  return (
    <section className="container-fluid g-0 hero-banner">
      <div className="row position-relative">
        <img className="img-fluid hero-main-img" src={heroImage} alt="software-hero" />
          <img
            className="img-thumbnail position-absolute custom-m software-hero-logo"
            src={heroLogo}
            alt="route-logo"
          />
          <div className="container g-0">
            <div className="row g-0">
              <div className="col-lg-5 bg-transparent position-absolute software-top">
                <h5 className="text-white software-hero-main-text ">
                  {heroheader}
                </h5>
                <p className="software-hero-secondary-text text-white">
                  {heroSubheader}
                </p>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
