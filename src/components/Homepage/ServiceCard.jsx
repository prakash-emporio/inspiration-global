import React from "react";

const services = [
  {
    id: 1,
    header: "Product Engineering",
    detail:
      "Ut nulla sociis vulputate iaculis sagittis tellus iaculis auctor facilisis. Nunc tincidunt sagittis.",
  },
  {
    id: 2,
    header: "Custom Development",
    detail:
      "Ut nulla sociis vulputate iaculis sagittis tellus iaculis auctor facilisis. Nunc tincidunt sagittis.",
  },
  {
    id: 3,
    header: "Cloud Services",
    detail:
      "Ut nulla sociis vulputate iaculis sagittis tellus iaculis auctor facilisis. Nunc tincidunt sagittis.",
  },
  {
    id: 4,
    header: "Data and Analytics",
    detail:
      "Ut nulla sociis vulputate iaculis sagittis tellus iaculis auctor facilisis. Nunc tincidunt sagittis.",
  },
  {
    id: 5,
    header: "Artificial Intelligence",
    detail:
      "Ut nulla sociis vulputate iaculis sagittis tellus iaculis auctor facilisis. Nunc tincidunt sagittis.",
  },
  {
    id: 6,
    header: "CIO Advisory",
    detail:
      "Ut nulla sociis vulputate iaculis sagittis tellus iaculis auctor facilisis. Nunc tincidunt sagittis.",
  },
  {
    id: 7,
    header: "PMO",
    detail:
      "Ut nulla sociis vulputate iaculis sagittis tellus iaculis auctor facilisis. Nunc tincidunt sagittis.",
  },
  {
    id: 8,
    header: "Security",
    detail:
      "Ut nulla sociis vulputate iaculis sagittis tellus iaculis auctor facilisis. Nunc tincidunt sagittis.",
  },
];

export default function ServiceCard() {
  return (
    <div className="flex flex-wrap justify-center mb-10">
      {services.map((service) => (
        <div key={service.id} className="w-1/4 p-3">
          <h1 className="text-xl text-purple-800 font-black p-5">{service.header}</h1>
          <p className="text-balance text-left p-5">{service.detail}</p>
        </div>
      ))}
    </div>
  );
}
