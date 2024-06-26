import "../css/Testimonial.css";
import CountUp from "react-countup";

export default function StatsSection({ title, description, statsData }) {
  return (
    <div
      className="mb-5 testimonial-wrapper container"
    >
      <div className="text-center">
        <div className="row">
          <div className="col-12 col-md-12">
            <h1 className="py-3 testimonial-heading">{title}</h1>
            <p className="testimonial-text p-3">{description}</p>
          </div>
        </div>
      </div>
      {/* lower section */}
      <div className="text-center">
        <div className="row">
          {statsData.map((data, index) => (
            <div className="col-12 col-md-4" key={index}>
              <h1 className="testimonial-number">
                <CountUp
                  start={0}
                  end={data.counter_number}
                  duration={5}
                  enableScrollSpy
                  scrollSpyOnce
                >{({ countUpRef }) => <span ref={countUpRef} />}</CountUp>
                {data.counter_number && <sup className="testimonial-plus">+</sup>}
              </h1>
              <p className="py-2 testimonial-last-text">{data.counter_heading}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
