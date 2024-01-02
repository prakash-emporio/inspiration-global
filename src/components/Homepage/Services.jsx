import React from "react";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <div>
      <h1 className="text-5xl font-black text-center mt-10">Our Services</h1>
      <ServiceCard />
      <div className="flex justify-center m-5">
      <button className="bg-lime-500 text-purple-800 font-bold rounded-full px-5 py-2 text-center">Learn More</button>
      </div>
    </div>
  );
}
