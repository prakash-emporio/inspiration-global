import content5 from "/content5.jpg";
import content6 from "/content6.jpg";
import content7 from "/content7.jpg";
import content8 from "/content8.jpg";

export default function ExtraCard() {
  return (
    <div>
      <div className="w-full max-md:max-w-full">
        <div className="flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[72%] max-md:w-full max-md:ml-0">
            <div className="flex-col overflow-hidden relative flex min-h-[580px] grow justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5">
              <img
                loading="lazy"
                src={content5}
                className="absolute inset-0 object-cover object-center w-full h-full"
              />
              <div className="relative flex w-[665px] max-w-full flex-col items-stretch mt-9 mb-20 max-md:mb-10">
                <div className="text-white text-center text-6xl font-black leading-[53.94px] tracking-tighter max-md:max-w-full max-md:text-4xl">
                  Sit elementum scelerisque
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c94ea7aef55ab0dc144d43bef6719b845652b71e87fe53b4ae1ea3c35ac0f21?apiKey=8e82500553ca48b393fa7f9343c196cd&"
                  className="aspect-square object-contain object-center w-[262px] justify-center items-center overflow-hidden self-center max-w-full mt-5 cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[28%] max-md:w-full max-md:ml-0">
            <div className="flex-col overflow-hidden relative flex aspect-[0.7051724137931035] grow py-10 items-end">
              <img
                loading="lazy"
                src={content6}
                className="absolute inset-0 object-cover object-center w-full h-full"
              />
              <div className="px-2 py-2 relative text-lime-300 text-center text-sm font-bold leading-6 tracking-widest whitespace-nowrap justify-center items-center shadow-sm bg-violet-700 aspect-square h-[42px] mr-10 rounded-3xl max-md:mr-2.5">
                T
              </div>
              <div className="relative flex flex-col items-stretch self-stretch px-10 mt-48 max-md:mt-10 max-md:px-5">
                <div className="text-white text-6xl font-black leading-[54px] tracking-tighter max-md:text-4xl max-md:leading-10">
                  <span className="text-4xl">Meet Team Member </span>
                </div>
                <div className="flex items-center self-start justify-center gap-3 py-3 pl-6 pr-4 mt-20 shadow-sm bg-lime-300 rounded-3xl max-md:mt-10 max-md:pl-5">
                  <button className="flex gap-3 my-auto text-sm font-bold leading-6 tracking-widest text-violet-700">
                    MEET
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-md:max-w-full">
        <div className="flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <div className="flex-col overflow-hidden relative flex min-h-[580px] grow py-11 items-end max-md:max-w-full">
              <img
                loading="lazy"
                src={content7}
                className="absolute inset-0 object-cover object-center w-full h-full"
              />
              <div className="relative text-lime-300 text-center text-sm font-bold leading-6 tracking-widest whitespace-nowrap justify-center items-center shadow-sm bg-violet-700 aspect-square h-[42px] mr-10 px-2 py-2 rounded-3xl max-md:mr-2.5">
                B
              </div>
              <div className="relative self-stretch flex flex-col items-stretch mt-52 mb-2.5 pl-16 pr-10 max-md:max-w-full max-md:mt-10 max-md:px-5">
                <div className="text-white text-6xl font-black leading-[54px] tracking-tighter max-md:max-w-full max-md:text-4xl max-md:leading-10">
                  Leveraging GenAI in your company
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
                        d="M14.78 14.78a.75.75 0 0 1-1.06 0L6.5 7.56v5.69a.75.75 0 0 1-1.5 0v-7.5A.75.75 0 0 1 5.75 5h7.5a.75.75 0 0 1 0 1.5H7.56l7.22 7.22a.75.75 0 0 1 0 1.06Z"
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
                src={content8}
                className="absolute inset-0 object-cover object-center w-full h-full"
              />
              <div className="relative text-lime-300 text-center text-sm font-bold leading-6 tracking-widest whitespace-nowrap justify-center items-center shadow-sm bg-violet-700 aspect-square h-[42px] mr-10 px-2 py-2 rounded-3xl max-md:mr-2.5">
                CS
              </div>
              <div className="relative self-stretch flex flex-col items-stretch mt-52 mb-2.5 pl-16 pr-10 max-md:max-w-full max-md:mt-10 max-md:px-5">
                <div className="text-white text-6xl font-black leading-[53.94px] tracking-tighter max-md:max-w-full max-md:text-4xl">
                  How does AI help the Public Sector
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
    </div>
  );
}
