import "../css/Hero.css";
import hero from "/hero.png";
import Header from "../header/Header.jsx";

export default function DummyHero() {
  return (
    <div className="hero-wrapper">
      <div className="header-wrapper">
        <Header />
      </div>
      <div className="hero-image-wrapper">
        <img className="hero-image" src={hero} alt="hero-image" />
      </div>
      <div className="text-wrapper">
        <span className="text-header-content">We Live</span>
        <span className="text-main-content">
          {" "}
          at the intersection of technology, talent & tomorrow
        </span>
        <span className="text-last-content">...</span>
        <button className="flex gap-3 px-10 py-3 text-sm font-semibold text-center uppercase bg-purple-800 rounded-full my-14 text-lime-300">
            Let's Go
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
      </div>
      
    </div>
  );
}
