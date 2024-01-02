import React from "react";

export default function CoverPage() {
  return (
    <div className="w-screen h-screen bg-blue-700">
      <div className="flex justify-end">
        <button className="px-10 py-3 mt-10 mr-10 text-xl font-bold uppercase align-middle bg-black rounded-full text-lime-500" role="button">
          dev
        </button>
      </div>
      <div className="flex justify-center px-10 py-20">
        <img
          loading="lazy"
          className=""
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/94f8493901820d14716fb963e5017c377ede0af724df5d5a479746368276cdc2?apiKey=8e82500553ca48b393fa7f9343c196cd&"
          alt="cover-page-image"
        />
      </div>
    </div>
  );
}