import "./company.css";
import CompanyHeroNew from "/CompanyHeroNew.png";

export default function CompanyHero() {
  return (
    <div className="container-fluid g-0">
      <div className="row">
        <div className="col">
            <h2 className="position-absolute z-2 company-hero-header">About Us</h2>
            <h2 className="position-absolute z-2 company-hero-header-two">Our Core</h2>
        </div>
        <div className="col-md-8">
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
