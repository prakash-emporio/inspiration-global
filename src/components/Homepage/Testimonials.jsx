import React from "react";
import aramaco from "/aramco.png";
import datacore from "/datacore.png";
import delaware from "/delaware.png";
import maryland from "/maryland.jpg";
import pennselvania from "/pennselvania.png";

export default function Testimonials() {
  return (
    <div className="">
      <div className="absolute flex justify-between w-4/5 p-10 mb-10 bg-white border border-white shadow-md left-32 -bottom-60">
        <img loading="lazy" width={120} src={aramaco} className="m-1 max-w-none" alt="aramaco" />
        <img loading="lazy" width={150} src={datacore} className="m-1 max-w-none" alt="datacore" />
        <img loading="lazy" width={100} src={maryland} className="m-1 max-w-none" alt="dhs" />
        <img loading="lazy" width={200} src={pennselvania} className="m-1 max-w-none" alt="pensslyvania" />
        <img loading="lazy" width={150} src={delaware} className="m-1 max-w-none" alt="revenue" />
      </div>
      {/* upper section */}
      <div className="mt-28">
      <h1 className="p-5 m-5 text-5xl font-black text-center">What We Do</h1>
      <p className="text-center">
        Inspiration Global is a premier talent and engineering company that
        offers <br /> comprehensive technology partnership services, spanning
        consulting, talent, <br /> solution development, and end- to- end
        implementation.
      </p>
    </div>
    {/* lower section */}
    <div className="flex justify-center p-10 gap-52">
      <div>
        <h1 className="font-extrabold text-center text-purple-800 text-7xl">24</h1>
        <p className="p-2 font-bold text-center">Years in Business</p>
      </div>
      <div>
        <h1 className="font-extrabold text-center text-purple-800 text-7xl">650<sup>+</sup></h1>
        <p className="p-2 font-bold text-center">Successful Projects</p>
      </div>
      <div>
        <h1 className="font-extrabold text-center text-purple-800 text-7xl">15</h1>
        <p className="p-2 font-bold text-center">Countries Served</p>
      </div>
    </div>
    </div>
  );
}
