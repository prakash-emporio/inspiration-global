import "./company.css";
import companyhero from "/companyhero.png";

export default function CompanyHero() {
  return (
    <div className="container-fluid g-0">
      <div className="row">
        <div className="col">
          <div className="d-flex justify-content-start pt-5 px-5 align-items-center align-middle h-25 m-5">
            <h1 className="company-hero-header">About Us</h1>
          </div>
          <div className="position-absolute start-50 z-2">
            <p className="company-hero-header-two">Our Core</p>
          </div>
        </div>
        <div className="col">
          <img
            className="img-fluid object-fit-fill"
            src={companyhero}
            alt="company-img"
          />
        </div>
      </div>
    </div>
  );
}
