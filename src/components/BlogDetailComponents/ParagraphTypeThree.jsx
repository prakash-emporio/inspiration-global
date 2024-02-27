export default function ParagraphTypeThree() {
  const text = [
    "Let’s talk about the advantages of VBR now that we’ve seen various ways to analyze these Big Five attributes to put the “value” in value-based recruiting.",
    "The name is the most important feature. It adds value to the situation. It improves the recruitment process, in other words. If a recruiter begins to evaluate these characteristics as part of the initial screening, any applicants that are selected will be that much more appealing to hiring managers. Employees who fit the company’s culture are more likely to develop their own personalities and find work less of a nuisance. Without question, having an engaging workplace enhances efficiency and boosts morale.",
    "Increased efficiency, satisfaction, and retention are all aided by a more rigorous recruitment process. There’s little motivation for an employee to leave if they’re happy at work. Besides, employee engagement has shifted from what discourages employees from leaving to what motivates them to stay. “This is something I have to do,” becomes “This is something I want to do.”",
    "Businesses that understand what makes their employees unique are now gaining traction. They were established to help businesses improve their hiring by identifying candidate strengths early in the process. Internal hiring follows the same mentality and technique.",
    "Every new employee is thoroughly evaluated to see if they fit the company’s desired mentality. The attributes they possess, as well as how complementary these qualities are to the rest of the team. It has never been so “stress-free” to go to work before. It is for this reason that organizations like Google have risen and continue to expand.",
  ];

  return (
    <div className="container my-lg-5">
      <div className="row">
        <div className="col">
          <h2 className="blog-paragraph-title">
            Value-Based Recruitment (VBR)
          </h2>
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
