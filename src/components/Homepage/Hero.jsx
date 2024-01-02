import React from "react";
import heroImage from "/heroImage.png";
import Navbar from "./Navbar.jsx";

export default function Hero() {
  return (
    <div className="container">
      <div className="flex justify-between bg-gray-900 max-md:w-full max-sm:w-full max-lg:max-w-full">
        <h1 className="px-10 pt-56 text-5xl text-white text-nowrap max-sm:text-center max-lg:w-full">
          <span className="font-bold text-lime-300">We Live</span> at the
          intersection <br /> of technology, talent & <br /> tomorrow...
        </h1>
        <img
          className="relative max-w-screen-md max-sm:hidden max-lg:w-full"
          src={heroImage}
          alt="hero-image"
        />
      </div>
      <div className="absolute top-0 max-sm:hidden">
        <Navbar />
      </div>
      <div className="absolute bottom-60 left-10 max-sm:hidden">
        <button className="flex gap-3 px-8 py-2 font-semibold text-center uppercase bg-purple-800 rounded-full text-lime-300">
          Let's Go
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/60e7be539a67367dc533c887d71fc67fec82919cfdcc8681266516f8e8fabda8?apiKey=8e82500553ca48b393fa7f9343c196cd&"
            className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch shrink-0 max-w-full"
            alt="Image description"
            role="img"
          />
        </button>
      </div>
    </div>
  );
}
