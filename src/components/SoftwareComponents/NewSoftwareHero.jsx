import "./SoftwareHero.css";

export default function NewSoftwareHero({ title, text, heroLogo }) {
  return (
    <section className="container-fluid mt-0 mb-0">
      <div className="container mt-0 mb-0">
        <div className="row justify-content-between g-0">
          <div className="col col-md-5 custom-padding">
            <h1 className="text-white software-hero-main-text">
              {title ? title : "Title Goes Here"}
            </h1>
            <p className="software-hero-secondary-text text-white">
              {text ? text : "Text Goes Here"}
            </p>
          </div>
          <div className="col-2 custom-logo-margin">
            <img className="img-thumbnail" src={heroLogo} alt="aws-logo" />
          </div>
        </div>
      </div>
    </section>
  );
}
