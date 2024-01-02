import React from "react";
import heroImage from "../../assets/heroImage.png";
import Navbar from "./Navbar.jsx";

export default function Hero() {
  return (
    <div>
      <div className="flex justify-between bg-gray-900">
        <h1 className="px-10 pt-56 text-5xl text-white text-nowrap">
          <span className="font-bold text-lime-300">We Live</span> at the
          intersection <br /> of technology, talent & <br /> tomorrow...
        </h1>
        <img
          className="relative max-w-screen-md"
          src={heroImage}
          alt="hero-image"
        />
      </div>
      <div className="absolute top-0">
        <Navbar />
      </div>
      <div className="absolute bottom-60 left-10">
        <button className="flex gap-3 px-8 py-2 text-center uppercase bg-purple-700 rounded-full text-lime-300">
          Let's Go
        </button>
      </div>
      
    </div>
  );
}
