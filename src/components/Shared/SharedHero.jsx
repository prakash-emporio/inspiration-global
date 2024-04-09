export default function SharedHero({ title, text }) {
  return (
    <div className="container mt-0 mb-0">
      <div className="row justify-content-between g-0 custom-padding">
        <div className="col-md-5">
          <h1 className="text-white shared-hero-main-text">
            {title}
          </h1>
        </div>
        <div className="col-md-6 talent-hero-card custom-card-padding">
          <div className="service-card-color">
            <h2 className="service-hero-card-text">
              {text}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
