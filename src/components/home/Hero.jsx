import heroImage from "/heroImage.png";
import Header from "../header/Header.jsx";

export default function Hero() {
  return (
    <div className="">
      <div className="flex justify-between bg-gray-900 max-md:w-full max-sm:w-full max-lg:max-w-full">
        <h1 className="px-10 pt-56 text-5xl text-white text-nowrap max-sm:text-center max-lg:w-full">
          <span className="font-bold text-lime-300">We Live</span> at the
          intersection <br /> of technology, talent & <br /> tomorrow...
          <button className="flex gap-3 px-8 py-2 text-sm font-semibold text-center uppercase bg-purple-800 rounded-full my-14 text-lime-300">
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
        </h1>
        <img
          className="relative max-w-screen-md max-sm:hidden max-lg:w-full"
          src={heroImage}
          alt="hero-image"
        />
      </div>
      <div className="absolute top-0 max-sm:hidden">
        <Header />
      </div>
      <div className="absolute bottom-60 left-10 max-sm:hidden">
        
      </div>
    </div>
  );
}
