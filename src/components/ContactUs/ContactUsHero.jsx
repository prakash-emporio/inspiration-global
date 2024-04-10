import "./contact.css";

export default function ContactUsHero({title}) {
  return (
    <section className="container-fluid mt-0 mb-0">
      <div className="container mt-0 mb-0">
        <div className="row justify-content-between g-0 custom-padding">
          <div className="col-md-5">
            <h1 className="text-white shared-hero-main-text">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
