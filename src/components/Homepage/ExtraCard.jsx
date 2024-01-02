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
                  className="aspect-square object-contain object-center w-[262px] justify-center items-center overflow-hidden self-center max-w-full mt-5"
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
                  <button className="my-auto text-sm font-bold leading-6 tracking-widest text-violet-700">
                    MEET
                  </button>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d93ad42c76f40cb3f46df636eaa8763a861acb9b5c532eb97892da88288b23b?apiKey=8e82500553ca48b393fa7f9343c196cd&"
                    className="self-stretch object-contain object-center w-5 max-w-full overflow-hidden aspect-square shrink-0"
                  />
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
                  <div className="my-auto text-sm font-bold leading-6 tracking-widest text-violet-700">
                    READ MORE
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc87f189b5d1f1b890dca7db547ab662594a2a01d2fafa4cf8d90dc10ee30639?apiKey=8e82500553ca48b393fa7f9343c196cd&"
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
                  <div className="my-auto text-sm font-bold leading-6 tracking-widest text-violet-700">
                    READ MORE
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1593ec13bc37955077e678f43e931973f6b3428f359659ba6a241aceae3f288?apiKey=8e82500553ca48b393fa7f9343c196cd&"
                    className="self-stretch object-contain object-center w-5 max-w-full overflow-hidden aspect-square shrink-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
