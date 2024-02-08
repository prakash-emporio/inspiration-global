import "./company.css";
import companyhero from "/companyhero.png";

export default function CompanyHero() {
  return (
    <div className="container-fluid g-0">
      <div className="row">
        <div className="col">
          
        </div>
        <div className="col">
          <img className="img-fluid" src={companyhero} alt="company-img" />
        </div>
      </div>
    </div>
  );
}
