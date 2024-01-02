import content1 from "/content1.jpg";
import content2 from "/content2.jpg";
import CommonCardComp from "../Homepage/CommonCardComp.jsx";
import ExtraCard from "../Homepage/ExtraCard.jsx";

export default function Content() {
  return (
    <div className="container mt-10 bg-white">
      <div className="container flex justify-between h-dvh">
        <img src={content1} loading="lazy" className="w-8/12" />
        <div className="w-4/12 p-5 bg-purple-700">
          <h1 className="px-5 pt-10 font-black text-white text-7xl">
            Lead With Impact
          </h1>
          <button className="px-5 py-2 text-xl font-bold text-purple-700 rounded-full my-72 bg-lime-300">
            Dive In
          </button>
        </div>
      </div>
      <div className="container flex justify-between h-dvh">
        <div className="w-4/12 p-5 bg-lime-300">
          <h1 className="px-5 pt-10 font-black text-7xl">All About Talent</h1>
          <button className="px-5 py-2 text-xl font-bold bg-black rounded-full text-lime-300 my-72">
            READ MORE
          </button>
        </div>
        <img src={content2} loading="lazy" className="w-8/12" />
      </div>
      <CommonCardComp />
      <ExtraCard />
    </div>
  );
}
