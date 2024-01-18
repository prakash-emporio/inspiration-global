import "./FeatureSection.css";

export default function FeatureSection() {
  return (
    <div className="container text-center">
      <div className="row m-5">
        <div className="col align-self-center">
          <div className="card mb-3">
            <div className="card-body feature-card-body">
              <h2 className="card-title feature-card-title">
                Enterprise Performance at <br />{" "}
                <span className="feature-card-title-next">Scale</span>
              </h2>
              <p className="card-text feature-card-text">
                IG and AWS collaborate to provide clients with expert industry
                knowledge and a vast network of cloud engineering resources.
                Together, they assist clients in developing agile, custom
                solutions that are bolstered by the power of the AWS cloud.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
