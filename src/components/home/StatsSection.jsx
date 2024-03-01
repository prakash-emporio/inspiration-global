import "../css/Testimonial.css";
import CountUp from "react-countup";

export default function StatsSection({title, description, statsData}) {
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="3000"
      className="mb-5 testimonial-wrapper container"
    >
      <div className="text-center">
        <div className="row">
          <div className="col-12 col-md-12">
            <h1 className="py-3 testimonial-heading">{title}</h1>
            <p className="testimonial-text p-3">
              {description}
            </p>
          </div>
        </div>
      </div>
      {/* lower section */}
      <div className="text-center">
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
