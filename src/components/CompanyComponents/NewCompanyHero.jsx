import "./company.css";

export default function NewCompanyHero({ title, subtitle }) {
  return (
    <section className="container mt-0 mb-0">
      <div className="row justify-content-start align-items-center g-0 text-start text-nowrap">
        <div className="col-md-3 company-hero-margin">
          <h2 className="company-hero-header">{title}</h2>
        </div>
      </div>
      <div className="row justify-content-center align-items-center g-0 text-center text-nowrap">
        <div className="col-md-3 company-hero-margin-two">
          <h2 className="company-hero-header-two">{subtitle}</h2>
        </div>
      </div>
    </section>
  );
}
