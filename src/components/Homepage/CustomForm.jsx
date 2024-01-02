import React from "react";

export default function CustomForm() {
  return (
    <div className="flex justify-between bg-purple-700">
      <div className="px-24 py-36">
        <h1 className="mt-10 font-black text-lime-300 text-7xl">
          Let’s Talk
        </h1>
      </div>
      <form className="px-16 py-10 max-md:px-5">
        <div className="">
          <input
            className="px-5 py-5 m-5 font-bold text-white bg-transparent border-b border-solid placeholder:text-white"
            type="text"
            name="name"
            id="name"
            placeholder="NAME"
          />
          <input
            className="px-5 py-5 m-5 font-bold text-white bg-transparent border-b border-solid placeholder:text-white"
            type="email"
            name="email"
            id="email"
            placeholder="EMAIL"
          />
          <div>
            <textarea
              className="px-5 py-5 m-5 font-bold text-white uppercase bg-transparent border-b border-solid placeholder:text-white"
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="TELL US EVERYTHING"
            ></textarea>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 py-3 pl-6 pr-4 mt-10 shadow-sm bg-lime-300 rounded-3xl max-md:pl-5">
          <button
            type="submit"
            className="mx-2 my-auto text-sm font-bold text-violet-700"
          >
            SEND
          </button>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/78ee4f49de15d69162c7e355219820504282367467a8c9c2c6e09ab3b14bf24e?apiKey=8e82500553ca48b393fa7f9343c196cd&"
            className="self-stretch object-contain object-center w-5 max-w-full overflow-hidden aspect-square shrink-0"
            alt="Logo"
          />
        </div>
      </form>
    </div>
  );
}
