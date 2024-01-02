import React from "react";
import talentPageMainImage from "../../assets/talentMainImage.jpg";
import { Navbar } from "../Homepage/index.js";

export default function TalentHero() {
  return (
    <div className="">
      <img
        className="relative min-h-screen"
        src={talentPageMainImage}
        alt="talent-page-main-image"
      />
      <div className="absolute top-0 w-full">
        <Navbar />
      </div>
      <h1 className="absolute w-2/4 p-10 mt-32 font-bold text-white text-7xl top-20 left-10">
        Talent Procurement and Professional Services
      </h1>
      <div className="absolute px-5 py-5 text-center border border-gray-500 -bottom-96 right-28 bg-lime-300">
        <p className="text-2xl font-bold">
          Our solutions empower you to <br /> promptly meet your staffing <br /> needs with
          professionals <br /> possessing the requisite <br /> expertise for contemporary, <br />
          intricate IT roles.
        </p>
      </div>
    </div>
  );
}
