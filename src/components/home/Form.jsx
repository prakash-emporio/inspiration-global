import React from "react";

export default function Form() {
  return (
    <div className="flex justify-between bg-purple-700 ">
      <div className="px-24 py-36">
        <h1 className="mt-10 font-black text-lime-300 text-7xl">Let’s Talk</h1>
      </div>
      <form className="px-16 py-10 max-md:px-5">
        <div className="">
          <input
            className="px-5 py-5 m-5 font-bold text-white bg-transparent border-b border-dotted placeholder:text-white "
            type="text"
            name="name"
            id="name"
            placeholder="NAME"
          />
          <input
            className="px-5 py-5 m-5 font-bold text-white bg-transparent border-b border-dotted placeholder:text-white"
            type="email"
            name="email"
            id="email"
            placeholder="EMAIL"
          />
          <div>
            <textarea
              className="px-5 py-5 m-5 font-bold text-white bg-transparent border-b border-dotted placeholder:text-white"
              name="message"
              id="message"
              cols="55"
              rows="3"
              placeholder="TELL US EVERYTHING"
            ></textarea>
          </div>
        </div>
        <div className="flex justify-end px-6">
          <div className="w-1/4">
            <div className="flex items-center justify-center gap-3 py-3 shadow-sm bg-lime-300 rounded-3xl max-md:pl-5">
              <button
                type="submit"
                className="flex gap-3 mx-1 my-auto text-sm font-bold text-violet-700"
              >
                SEND
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
      </form>
    </div>
  );
}
