export default function TestimonialSection() {
  const statsData = [
    { value: 24, label: "Years in Business" },
    { value: 650, label: "Successful Projects", sup: true },
    { value: 15, label: "Countries Served" },
  ];
  return (
    <div className="">
      <div className="mt-28">
        <h1 className="p-5 m-5 text-5xl font-black text-center">What We Do</h1>
        <p className="text-center">
          Inspiration Global is a premier talent and engineering company that
          offers <br /> comprehensive technology partnership services, spanning
          consulting, talent, <br /> solution development, and end- to- end
          implementation.
        </p>
      </div>
      {/* lower section */}
      <div className="flex justify-center p-10 gap-52">
        <div>
          <h1 className="font-black text-center text-purple-800 text-7xl">
            24
          </h1>
          <p className="p-2 font-bold text-center">Years in Business</p>
        </div>
        <div>
          <h1 className="font-black text-center text-purple-800 text-7xl">
            650<sup>+</sup>
          </h1>
          <p className="p-2 font-bold text-center">Successful Projects</p>
        </div>
        <div>
          <h1 className="font-black text-center text-purple-800 text-7xl">
            15
          </h1>
          <p className="p-2 font-bold text-center">Countries Served</p>
        </div>
      </div>
    </div>
  );
}
