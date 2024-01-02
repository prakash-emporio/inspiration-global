import React from "react";
import content1 from "../../assets/content1.jpg";
import content2 from "../../assets/content2.jpg";
import content3 from "../../assets/content3.jpg";
import content4 from "../../assets/content4.jpg";

export default function Card() {
  return (
    <div>
      {/* 1 part */}
      <div className="flex">
        <img className="w-4/6" src={content1} alt="logo" />
        <div className="bg-blue-700 w-2/6">
          <h1 className="text-white uppercase text-5xl font-bold">
            Lead With Impact
          </h1>
          <button className="text-purple-800 font-semibold bg-lime-500 rounded-full px-5 py-1">
            Dive In
          </button>
        </div>
      </div>
      {/* 2 part */}
      <div className="flex">
        <div className="bg-blue-700 w-2/6">
          <h1 className="text-white uppercase text-5xl font-bold">
            All About Talent
          </h1>
          <button className="text-purple-800 font-semibold bg-lime-500 rounded-full px-5 py-1">
            Learn More
          </button>
        </div>
        <img className="w-4/6" src={content2} alt="logo" />
      </div>
      {/* 3 part */}
      <div className="flex">
        <img width={300} src={content3} alt="" />
        <button>Read More</button>
        <img width={300} src={content4} alt="" />
        <button>Read More</button>
      </div>
      {/* 4 part */}
      <div className="flex">
        <img className="w-4/6" src={content1} alt="logo" />
        <div className="bg-blue-700 w-2/6">
          <h1 className="text-white uppercase text-5xl font-bold">
            Lead With Impact
          </h1>
          <button className="text-purple-800 font-semibold bg-lime-500 rounded-full px-5 py-1">
            Dive In
          </button>
        </div>
      </div>
      {/* 5 part */}
      <div className="flex">
        <img src="" alt="" />
        <button>Read More</button>
        <img src="" alt="" />
        <button>Read More</button>
      </div>
    </div>
  );
}
