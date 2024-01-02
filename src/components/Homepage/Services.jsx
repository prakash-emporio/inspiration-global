import React from "react";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <div className="mb-10">
      <h1 className="text-5xl font-black text-center mt-10 py-10">
        Our Services
      </h1>
      <ServiceCard />
      <div className="flex justify-center m-5">
        <div
          className="justify-center items-center shadow-sm bg-lime-300 self-center flex gap-3 mt-11 mb-10 pl-6 pr-4 py-3 rounded-3xl max-md:mt-10 max-md:pl-5"
          aria-label="Learn More Form"
        >
          <button
            href="..."
            className="flex gap-3 text-violet-700 text-sm font-bold leading-6 tracking-widest grow whitespace-nowrap my-auto"
            aria-label="Learn More Link"
          >
            LEARN MORE
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
    </div>
  );
}
