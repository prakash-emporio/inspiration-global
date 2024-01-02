import React from "react";

export default function TalentTestimonial() {
  return (
    <div className="flex flex-col items-center justify-center px-16 py-12 bg-lime-300 max-md:px-5">
      <div className="flex w-full max-w-[1230px] flex-col items-stretch mt-14 mb-4 max-md:max-w-full max-md:mt-10">
        <div className="text-5xl font-bold leading-10 tracking-tighter text-black max-md:max-w-full">
          Est aliquam sit massa quis ut pellentesque tortor neque lorem potenti
          feugiat sed feugiat blandit commodo viverra amet luctus scelerisque.
        </div>
        <div className="flex flex-col items-stretch self-end mt-12 max-md:mt-10">
          <div className="text-xl font-black leading-7 text-right text-black">
            Name Surname
          </div>
          <div className="self-end mt-3 text-lg leading-6 text-right text-black">
            Title
          </div>
        </div>
      </div>
    </div>
  );
}
