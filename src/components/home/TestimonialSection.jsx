import "../css/Testimonial.css";
import CountUp from "react-countup";

const statsData = [
  { index: 0, value: 24, label: "Years in Business" },
  { index: 1, value: 650, label: "Successful Projects", sup: true },
  { index: 2, value: 15, label: "Countries Served" },
];

export default function TestimonialSection() {
  return (
    <div className="mb-5 testimonial-wrapper">
      <div className="">
        <h1 className="p-3 text-center testimonial-heading">What We Do</h1>
        <p className="text-center testimonial-text p-3">
          Inspiration Global is a premier talent and engineering company that
          offers <br /> comprehensive technology partnership services, spanning
          consulting, talent, <br /> solution development, and end- to- end
          implementation.
        </p>
      </div>
      {/* lower section */}
      <div className="d-flex justify-content-around">
        {statsData.map((data) => (
          <div key={data.index}>
            <h1 className="text-center testimonial-number">
              <CountUp start={0} end={data.value} duration={5} enableScrollSpy scrollSpyOnce ></CountUp>
              {data.sup && <sup className="testimonial-plus">+</sup>}
            </h1>
            <p className="p-2 text-center testimonial-last-text">
              {data.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
