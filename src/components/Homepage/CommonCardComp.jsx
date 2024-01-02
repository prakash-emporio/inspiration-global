import React from "react";
import content3 from "../../assets/content3.jpg";
import content4 from "../../assets/content4.jpg";

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
                <button className="my-auto text-sm font-bold leading-6 tracking-widest text-violet-700">
                  READ MORE
                </button>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/78ee4f49de15d69162c7e355219820504282367467a8c9c2c6e09ab3b14bf24e?apiKey=8e82500553ca48b393fa7f9343c196cd&"
                  className="self-stretch object-contain object-center w-5 max-w-full overflow-hidden aspect-square shrink-0"
                />
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
                <button className="my-auto text-sm font-bold leading-6 tracking-widest text-violet-700">
                  READ MORE
                </button>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/78ee4f49de15d69162c7e355219820504282367467a8c9c2c6e09ab3b14bf24e?apiKey=8e82500553ca48b393fa7f9343c196cd&"
                  className="self-stretch object-contain object-center w-5 max-w-full overflow-hidden aspect-square shrink-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
