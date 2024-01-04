import content1 from "/content1.jpg";
import content2 from "/content2.jpg";

export default function Content() {
  return (
    <div className="mt-10 bg-white ">
      <div className="flex justify-between h-dvh">
        <img src={content1} loading="lazy" className="w-8/12" />
        <div className="w-4/12 p-5 bg-purple-700">
          <h1 className="px-5 pt-10 font-black text-white text-7xl">
            Lead With Impact
          </h1>
          <button className="flex gap-2 px-5 py-2 mx-5 font-bold text-purple-700 rounded-full my-72 bg-lime-300">
            DIVE IN
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
      <div className="flex justify-between h-dvh">
        <div className="w-4/12 p-5 bg-lime-300">
          <h1 className="px-5 pt-10 font-black text-7xl">All About Talent</h1>
          <button className="flex gap-2 px-5 py-2 mx-5 font-bold bg-purple-700 rounded-full text-lime-300 my-72">
            LEARN MORE
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06l7.22 7.22H6.75a.75.75 0 0 0 0 1.5h7.5a.747.747 0 0 0 .75-.75v-7.5a.75.75 0 0 0-1.5 0v5.69L6.28 5.22Z" />
            </svg>
          </button>
        </div>
        <img src={content2} loading="lazy" className="w-8/12" />
      </div>
    </div>
  );
}
