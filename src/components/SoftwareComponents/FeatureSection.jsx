import "./FeatureSection.css";

export default function FeatureSection({ title, subtitle, text }) {

  return (
    <div className="container text-center">
      <div className="row my-5">
        <div className="col">
          <h2 className="feature-card-title">
            {title}
            <br />
            <p className="feature-card-title-next">{subtitle}</p>
          </h2>
          <p className="card-text feature-card-text">{text}</p>
        </div>
      </div>
    </div>
  );
}
