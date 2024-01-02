import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <div className="mb-10">
      <h1 className="py-10 mt-10 text-5xl font-black text-center">
        Our Services
      </h1>
      <ServiceCard />
      <div className="flex justify-center m-5">
        <div
          className="flex items-center self-center justify-center gap-3 py-3 pl-6 pr-4 mb-10 shadow-sm bg-lime-300 mt-11 rounded-3xl max-md:mt-10 max-md:pl-5"
          aria-label="Learn More Form"
        >
          <button
            href="..."
            className="flex gap-3 my-auto text-sm font-bold leading-6 tracking-widest text-violet-700 grow whitespace-nowrap"
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
