import heroImage from "/heroImage.png";
import "../css/Hero.css";

export default function Hero() {
  return (
    <section className="hero-banner">
      <div class="">
        <div class="row align-items-center">
          <div class="col-3 p-lg-5 pt-lg-3 d-none d-sm-block">

            <div class="lc-block mb-3 hero-heading">
              <h2 class="display-4 text-light">
                <span className="fw-bold hero-main-text">We Live</span> at the
                intersection <br /> of technology, talent & tomorrow{" "}
                <span className="hero-end-text">...</span>
              </h2>
            </div>

            <button class="btn px-4 me-md-2 hero-btn" href="#" role="button">
              Let's Go
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="ms-2"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.21967 14.7803C5.51256 15.0732 5.98744 15.0732 6.28033 14.7803L13.5 7.56066V13.25C13.5 13.6642 13.8358 14 14.25 14C14.6642 14 15 13.6642 15 13.25V5.75C15 5.33579 14.6642 5 14.25 5H6.75C6.33579 5 6 5.33579 6 5.75C6 6.16421 6.33579 6.5 6.75 6.5H12.4393L5.21967 13.7197C4.92678 14.0126 4.92678 14.4874 5.21967 14.7803Z"
                  fill="#A1F157"
                />
              </svg>
            </button>
          </div>

          <div class="col-9 p-0">
            <div class="">
              <img class="w-100 hero-image" src={heroImage} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
