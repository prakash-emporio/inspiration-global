export default function Footer() {
  return (
    <div className="container flex flex-col items-center px-16 pb-4 bg-gray-900 pt-11 max-md:px-5">
      <header className="flex w-full max-w-[1230px] flex-col items-stretch max-md:max-w-full">
        <div className="flex items-center justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
          <div
            className="my-auto text-sm font-bold leading-7 tracking-widest text-white uppercase"
            aria-label="Software & Services"
          >
            Software & Services
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c0f3754665ba9472868774f3429396dc58acdc4069c6fa0fa6aba509938b0d2?apiKey=8e82500553ca48b393fa7f9343c196cd&"
            className="aspect-[2.7] object-contain object-center w-[170px] justify-center items-center overflow-hidden self-stretch shrink-0 max-w-full"
            alt=""
          />
        </div>
        <div className="flex items-stretch justify-between gap-5 mt-5 max-md:max-w-full max-md:flex-wrap">
          <div className="flex flex-col items-stretch">
            <div
              className="text-sm font-bold leading-7 tracking-widest text-white uppercase"
              aria-label="Talent"
            >
              Talent
            </div>
            <div
              className="text-sm font-bold leading-7 tracking-widest text-white uppercase whitespace-nowrap mt-11 max-md:mt-10"
              aria-label="Industries"
            >
              Industries
            </div>
            <div
              className="text-sm font-bold leading-7 tracking-widest text-white uppercase whitespace-nowrap mt-11 max-md:mt-10"
              aria-label="Insights"
            >
              Insights
            </div>
            <div
              className="text-sm font-bold leading-7 tracking-widest text-white uppercase whitespace-nowrap mt-11 max-md:mt-10"
              aria-label="Company"
            >
              Company
            </div>
          </div>
          <div
            className="self-start mt-5 text-5xl font-black leading-10 tracking-tighter text-right text-purple-900 bg-clip-text grow shrink basis-auto max-md:max-w-full max-md:text-4xl max-md:leading-10"
            aria-label="From Concept to Completion with Optimal Solutions"
          >
            From Concept to Completion
            <br /> with Optimal Solutions
          </div>
        </div>
      </header>
      <div className="mt-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[44%] max-md:w-full max-md:ml-0">
            <div
              className="my-auto text-xs tracking-wider text-gray-500 uppercase max-md:max-w-full max-md:mt-10"
              aria-label="Copyright © 2023 Inspiration Global | All rights reserved"
            >
              Copyright © 2023 Inspiration Global | All rights reserved
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex items-stretch justify-between gap-5 px-px grow max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/81d5af016ba582b9290d64cfb7e0ced57006e15c2c862775a5c2fbaf76af8ad2?apiKey=8e82500553ca48b393fa7f9343c196cd&"
                className="aspect-[1.01] object-contain object-center w-[130px] overflow-hidden shrink-0 max-w-full"
                alt=""
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/37efb43a42aa62fd13c41d9d22bdcd4819a3eb9732525cf99b6a52ce6942ed6d?apiKey=8e82500553ca48b393fa7f9343c196cd&"
                className="self-center object-contain object-center w-6 max-w-full my-auto overflow-hidden aspect-square shrink-0"
                alt=""
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7aa4dbc5fdafcb38d43c2015f18de2eb9aac4b9118be62118f483a49a8d770c2?apiKey=8e82500553ca48b393fa7f9343c196cd&"
                className="items-center self-center justify-center object-contain object-center w-6 max-w-full my-auto overflow-hidden aspect-square shrink-0"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[22%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex items-stretch justify-between gap-5 my-auto max-md:mt-10">
              <div
                className="text-xs font-extrabold tracking-wider text-gray-500 uppercase text-nowrap"
                aria-label="Terms of Service"
              >
                Terms of Service
              </div>
              <div
                className="text-xs font-extrabold tracking-wider text-gray-500 uppercase text-nowrap"
                aria-label="DEI Policy"
              >
                DEI Policy
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
