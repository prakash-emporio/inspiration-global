import React from "react";

export default function Section() {
  return (
    <div>
      {" "}
      <div className="bg-white flex flex-col items-stretch pb-12">
        <header className="bg-violet-700 flex w-full flex-col items-center pt-12 px-16 border-t-[10px] border-t-lime-300 border-solid max-md:max-w-full max-md:px-5">
          <div
            className="z-[1] flex w-[940px] max-w-full flex-col items-center mt-12 -mb-7 max-md:mt-10 max-md:mb-2.5"
            aria-label="Powering Enterprises Header"
          >
            <h1 className="text-white text-center text-6xl font-black leading-[59.74px] tracking-tighter max-md:max-w-full max-md:text-4xl">
              Powering Enterprises
            </h1>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b748d6054a033aed234702c59aed683815043cd760c23b01722d99d73a57db7c?apiKey=8e82500553ca48b393fa7f9343c196cd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b748d6054a033aed234702c59aed683815043cd760c23b01722d99d73a57db7c?apiKey=8e82500553ca48b393fa7f9343c196cd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b748d6054a033aed234702c59aed683815043cd760c23b01722d99d73a57db7c?apiKey=8e82500553ca48b393fa7f9343c196cd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b748d6054a033aed234702c59aed683815043cd760c23b01722d99d73a57db7c?apiKey=8e82500553ca48b393fa7f9343c196cd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b748d6054a033aed234702c59aed683815043cd760c23b01722d99d73a57db7c?apiKey=8e82500553ca48b393fa7f9343c196cd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b748d6054a033aed234702c59aed683815043cd760c23b01722d99d73a57db7c?apiKey=8e82500553ca48b393fa7f9343c196cd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b748d6054a033aed234702c59aed683815043cd760c23b01722d99d73a57db7c?apiKey=8e82500553ca48b393fa7f9343c196cd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b748d6054a033aed234702c59aed683815043cd760c23b01722d99d73a57db7c?apiKey=8e82500553ca48b393fa7f9343c196cd&"
              className="aspect-[6.27] object-contain object-center w-full overflow-hidden self-stretch mt-24 max-md:max-w-full max-md:mt-10"
              alt="Powering Enterprises Image"
            />
          </div>
        </header>
        <div
          className="text-black text-center text-xl font-light leading-7 self-center w-[1020px] mt-24 max-md:max-w-full max-md:mt-10"
          aria-label="Powering Enterprises Description"
        >
          For a lot of companies, managing complex application landscapes that
          include a mix of legacy systems, digital technologies, and SaaS
          solutions can be a daunting task. Such landscapes can consume a
          significant amount of IT resources, hampering the company's potential
          for growth.
          <br />
          <br />
          Our application services offer an effective solution to this
          challenge, enabling you to streamline and optimize your application
          landscape with speed and efficiency. We prioritize agility and
          adaptability and continuously introduce innovative solutions to ensure
          that your business gains the most value from the capabilities we
          provide.
        </div>
        <form
          className="justify-center items-center shadow-sm bg-lime-300 self-center flex gap-3 mt-11 mb-10 pl-6 pr-4 py-3 rounded-3xl max-md:mt-10 max-md:pl-5"
          aria-label="Learn More Form"
        >
          <a
            href="..."
            className="text-violet-700 text-sm font-bold leading-6 tracking-widest grow whitespace-nowrap my-auto"
            aria-label="Learn More Link"
          >
            LEARN MORE
          </a>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/78ee4f49de15d69162c7e355219820504282367467a8c9c2c6e09ab3b14bf24e?apiKey=8e82500553ca48b393fa7f9343c196cd&"
            className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch shrink-0 max-w-full"
            alt="Learn More Image"
          />
        </form>
      </div>
    </div>
  );
}
