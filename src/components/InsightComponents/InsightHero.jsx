import insighthero from "/insighthero.png";

export default function InsightHero() {
  return (
    <section className="container-fluid g-0">
      <div className="row g-0 position-relative">
        <img className="img-fluid talent-hero-img" src={insighthero} alt="" />
        <div className="position-absolute talent-top">
          <div className="bg-transparent">
            <div className="container">
              <div className="row">
                <div className="col">
                  <h5 className="px-md-5 py-md-3 px-lg-0 text-white shared-hero-main-text">
                    Blog
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
