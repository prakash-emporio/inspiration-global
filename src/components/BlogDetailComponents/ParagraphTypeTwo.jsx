export default function ParagraphTypeTwo() {
  const text = [
    "This notion has been confirmed numerous times, dating back to 1949, and it is continuously being developed. These characteristics are more or less consistent throughout an individual’s life.",
    "Therefore, measuring these five characteristics will offer you a good idea of your prospects’ personalities. Each of these “Big 5” has a unique value for each organization, department, and function.",
    "These qualities can be assessed in a number of ways. Colour can be used to signify how effectively candidates display these characteristics, as well as star ratings and even a simple thumbs up or down. Regardless of the signs, the true value of such an assessment is in using it with the support of individuals who know your candidates.",
    "Those who have had the chance to witness a candidate’s performance in a role pay attention to their traits and ideals. This, in my opinion, is one of the most important techniques to discover about your applicants prior to interviewing them.",
  ];

  return (
    <div className="container my-lg-5">
      <div className="row">
        <div className="col">
          <h2 className="blog-paragraph-title">Culture Suitability</h2>
          <section className="blog-paragraph">
            <p>
              Many experts today believe there are five basic personality
              traits:
            </p>
            <ul>
              <li>Agreeableness</li>
              <li>Conscientiousness</li>
              <li>Extroversion</li>
              <li>Openness</li>
              <li>Neuroticism</li>
            </ul>
          </section>
          <section className="blog-paragraph">
            {text.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
