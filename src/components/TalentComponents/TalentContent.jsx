export default function TalentContent({ title, text, index }) {
  const isTitleLeft = index % 2 === 0;
  const isFirst = index === 1;

  return (
    <div className="container">
      <div className="row g-0 justify-content-between">
        {isTitleLeft && title && (
          <h2 className="col-lg-3 talent-testimonial-header text-wrap section-one">
            {title}
          </h2>
        )}
        {text && (
          <p
            className={` ${isFirst? "col-lg-6" : "col-lg-7"} service-testimonial-text section-two ${
              isTitleLeft ? "" : "text-start"
            }`}
          >
            {text}
          </p>
        )}
        {!isTitleLeft && title && (
          <h2 className="col-lg-3 talent-testimonial-header text-end section-one">
            {title}
          </h2>
        )}
      </div>
    </div>
  );
}

const content = [
  {
    title: "",
    text: "In today's dynamic business landscape, every organization needs highly proficient IT personnel. IG's versatile team excels in streamlining talent acquisition and staffing processes, effectively reducing recruitment timelines for clients spanning diverse industries. Recognizing the importance of allowing your recruiting team to focus on their primary tasks, we offer efficient staffing and talent solutions that complement your in-house efforts.",
  },
  {
    title: "Seamless Staffing & Talent Solutions",
    text: "Our staffing and talent solutions facilitate swift fulfillment of your requirements with individuals well-versed in today's intricate IT positions. The IG talent team boasts decades of specialized experience in swiftly identifying the ideal candidates. Perfect Alignment We save you significant time, energy, and resources, all while ensuring that the talent we provide is not only qualified but also a seamless fit for your organizational culture.",
  },
  {
    title: "Streamlined Approach",
    text: "IG employs pioneering and effective sourcing strategies, incorporating a targeted search process and relationship-building initiatives. We emphasize integrity, utilizing a robust applicant tracking system and strategically posting job openings across various social media platforms like LinkedIn, Twitter, Facebook, and more.",
  },
  {
    title: "Holistic Evaluation",
    text: "Our comprehensive focus revolves around aligning with your company's strategy and culture while pinpointing the essential skills, competencies, and experiences required in individuals. We assess candidates based on their technical prowess, analytical capabilities, communication skills, ability to work in teams, cross-cultural adaptability, and results-oriented approach to ensure the perfect match. IG’s seasoned team makes sourcing and staffing simple. Clients look to us when faced with challenging resource issues for efficiency and reliability in finding the best qualified candidate for their jobs.",
  },
];
