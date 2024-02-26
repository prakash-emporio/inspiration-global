import "./company.css";
import companyhero from "/companyhero.png";
import CompanyHeroNew from "/CompanyHeroNew.png";

export default function CompanyHero() {
  return (
    <div className="container-fluid g-0">
      <div className="row">
        <div className="col">
          <div className="d-flex justify-content-start align-items-center">
            <h1 className="company-hero-header">About Us</h1>
          </div>
          <div className="position-absolute start-50 z-2">
            <p className="company-hero-header-two">Our Core</p>
          </div>
        </div>
        <div className="col-md-9">
          <img
            className="img-fluid object-fit-fill company-hero-img"
            src={CompanyHeroNew}
            alt="company-img"
          />
        </div>
      </div>
    </div>
  );
}
