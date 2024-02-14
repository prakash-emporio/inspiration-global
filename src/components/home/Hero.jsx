import "../css/Hero.css";

export default function Hero({
  heroImg,
  heroTitle,
  heroTitleMain,
  heroTitleEnding,
  heroButtonText,
}) {
  return (
    <section className="hero-banner">
      <div className="container-fluid">
        <div className="row">
          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className="col-md-3"
          >
            <div className="hero-header-wrapper">
              <h2 className="text-light hero-header">
                <span className="hero-main-text">{heroTitle}</span>{" "}
                {heroTitleMain}
                <span className="hero-end-text">{heroTitleEnding}</span>
              </h2>
              <button
                className="btn mt-md-3 mt-lg-5 hero-btn"
                href="#"
                role="button"
              >
                {heroButtonText}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="hero-svg-icon"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.21967 14.7803C5.51256 15.0732 5.98744 15.0732 6.28033 14.7803L13.5 7.56066V13.25C13.5 13.6642 13.8358 14 14.25 14C14.6642 14 15 13.6642 15 13.25V5.75C15 5.33579 14.6642 5 14.25 5H6.75C6.33579 5 6 5.33579 6 5.75C6 6.16421 6.33579 6.5 6.75 6.5H12.4393L5.21967 13.7197C4.92678 14.0126 4.92678 14.4874 5.21967 14.7803Z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="col-md-9 g-0"
          >
            <img className="w-100 hero-image" src={heroImg} />
          </div>
        </div>
      </div>
    </section>
  );
}
