import content3 from "/content3.jpg";
import content4 from "/content4.jpg";

export default function CommonCardComp() {
  return (
    <div className="w-full max-md:max-w-full">
      <div className="flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
          <div className="flex-col overflow-hidden relative flex min-h-[580px] grow py-11 items-end max-md:max-w-full">
            <img
              loading="lazy"
              src={content3}
              className="absolute inset-0 object-cover object-center w-full h-full"
            />
            <div className="relative text-lime-300 text-center text-sm font-bold leading-6 tracking-widest whitespace-nowrap justify-center items-center shadow-sm bg-violet-700 aspect-square h-[42px] mr-10 px-2 py-2 rounded-3xl max-md:mr-2.5">
              CS
            </div>
            <div className="relative self-stretch flex flex-col items-stretch mt-52 mb-2.5 pl-16 pr-10 max-md:max-w-full max-md:mt-10 max-md:px-5">
              <div className="text-white text-6xl font-black leading-[53.94px] tracking-tighter max-md:max-w-full max-md:text-4xl">
                To the Cloud in 24 Hours
              </div>
              <div className="flex items-center self-start justify-center gap-3 py-3 pl-6 pr-4 mt-20 shadow-sm bg-lime-300 rounded-3xl max-md:mt-10 max-md:pl-5">
                <button className="flex gap-3 my-auto text-sm font-bold leading-6 tracking-widest text-violet-700">
                  READ MORE
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
        </div>
        <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
          <div className="flex-col overflow-hidden relative flex min-h-[580px] grow py-11 items-end max-md:max-w-full">
            <img
              loading="lazy"
              src={content4}
              className="absolute inset-0 object-cover object-center w-full h-full"
            />
            <div className="relative text-lime-300 text-center text-sm font-bold leading-6 tracking-widest whitespace-nowrap justify-center items-center shadow-sm bg-violet-700 aspect-square h-[42px] mr-10 px-2 py-2 rounded-3xl max-md:mr-2.5">
              B
            </div>
            <div className="relative self-stretch flex flex-col items-stretch mt-64 mb-2.5 pl-16 pr-10 max-md:max-w-full max-md:mt-10 max-md:px-5">
              <div className="text-white text-6xl font-black leading-[53.94px] tracking-tighter max-md:max-w-full max-md:text-4xl">
                Value Based Hiring
              </div>
              <div className="flex items-center self-start justify-center gap-3 py-3 pl-6 pr-4 mt-20 shadow-sm bg-lime-300 rounded-3xl max-md:mt-10 max-md:pl-5">
                <button className="flex gap-3 my-auto text-sm font-bold leading-6 tracking-widest text-violet-700">
                  READ MORE
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
        </div>
      </div>
    </div>
  );
}
