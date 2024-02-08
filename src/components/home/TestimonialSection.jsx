import "../css/Testimonial.css";
import CountUp from "react-countup";

const statsData = [
  { index: 0, value: 24, label: "Years in Business" },
  { index: 1, value: 650, label: "Successful Projects", sup: true },
  { index: 2, value: 15, label: "Countries Served" },
];

export default function TestimonialSection() {
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="3000"
      className="mb-5 testimonial-wrapper"
    >
      <div className="container text-center">
        <div className="row">
          <div className="col-12 col-md-12">
            <h1 className="py-3 testimonial-heading">What We Do</h1>
            <p className="testimonial-text p-3">
              Inspiration Global is a premier talent and engineering company
              that offers comprehensive technology partnership services,
              spanning consulting, talent, solution development, and end- to-
              end implementation.
            </p>
          </div>
        </div>
      </div>
      {/* lower section */}
      <div className="container text-center">
        <div className="row">
          {statsData.map((data) => (
            <div className="col-12 col-md-4" key={data.index}>
              <h1 className="testimonial-number">
                <CountUp
                  start={0}
                  end={data.value}
                  duration={5}
                  enableScrollSpy
                  scrollSpyOnce
                ></CountUp>
                {data.sup && <sup className="testimonial-plus">+</sup>}
              </h1>
              <p className="py-2 testimonial-last-text">{data.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
