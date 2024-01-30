import "./FeatureSection.css";

export default function FeatureSection() {
  return (
    <div className="container text-center">
      <div className="row my-5">
        <div className="col">
              <h2 className="feature-card-title">
                Enterprise Performance at <br />
                <p className="py-5 feature-card-title-next">Scale</p>
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
  );
}
