import industryPageMainImage from "/industryPageMainImage.jpg";
import { Header } from "../home/index.js";

export default function IndustryHero() {
  return (
    <div className="">
      <img
        className="relative min-h-screen"
        src={industryPageMainImage}
        alt="industry-page-main-image"
      />
      <div className="absolute top-0 w-full">
        <Header />
      </div>
      <h1 className="absolute w-2/4 p-10 mt-32 font-bold text-white text-7xl top-20 left-10">
        Public Sector
      </h1>
      <div className="absolute w-1/4 px-5 py-5 text-center border border-gray-500 -bottom-96 right-28 bg-lime-300">
        <p className="text-2xl font-bold ">
          Faced with limited resources, tight deadlines, and a persistent state
          of crisis, leaders in the public service sector must carefully balance
          stability and speed in response to ever-changing needs.
        </p>
      </div>
    </div>
  );
}
