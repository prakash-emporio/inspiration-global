export default function MainParagraph() {
  const text = [
    "According to the study, 45 percent of new employees quit within the first year. Half of recruiting managers believe they could have made a better choice. These staggering figures reflect the tragic truth of the pandemic’s current situation.",
    "The value put on recruiting has never been stronger in an era where work from home is gaining acceptance. It is difficult to find, recruit, and keep top talent, and every company understands how difficult it is to compete for top talent.",
    "It is really tough to find the appropriate people with the correct ideals for the right jobs. Despite the fact that attracting outstanding personnel is a high goal for HODs, many companies still perceive recruiting to be the primary job of the HR department.",
    "The industry has not fully adopted the ethos of sharing joint ownership for excellent hires. It is not only about finding and hiring a candidate. Retention is just as important as placement. What happens if employee turnover keeps increasing?",
    "This is exacerbated by our generation’s greatest calamity, the dreaded “Great Resignation,” which everyone has heard about. There has to be a better method to increase employee engagement and retention. Hiring like-minded employees who fit the company’s culture is one option.",
  ];

  return (
    <div className="container my-lg-5">
      <div className="row">
        <div className="col">
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
