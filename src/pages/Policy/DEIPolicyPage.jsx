import "./DEIPolicyPage.css";

const api = {
  title: "Diversity, Equity and Inclusion Policy",
  content:
    "Inspiration Global is committed to fostering, cultivating and preserving a culture of diversity, equity and inclusion.The collective sum of the individual differences, life experiences, knowledge, inventiveness, innovation, self-expression, unique capabilities and talent that our employees invest in their work represents a significant part of not only our culture, but our reputation and company’s achievement as well.We embrace and encourage our employees’ differences in age, color, disability, ethnicity, family or marital status, gender identity or expression, language, national origin, physical and mental ability, political affiliation, race, religion, sexual orientation, socio-economic status, veteran status, and other characteristics that make our employees unique.",
  subcontent:
    "Inspiration Global’s diversity initiatives are applicable—but not limited—to our practices and policies on recruitment and selection; compensation and benefits; professional development and training; promotions; transfers; social and recreational programs; layoffs; terminations; and the ongoing development of a work environment built on the premise of gender and diversity equity that encourages and enforces:",
  points: [
    "Respectful communication and cooperation between all employees.",
    "Teamwork and employee participation, permitting the representation of all groups and employee perspectives.",
    "Work/life balance through flexible work schedules to accommodate employees’ varying needs.",
    "Employer and employee contributions to the communities we serve to promote a greater understanding and respect for diversity.",
  ],
};

export default function DEIPolicyPage({ title, content }) {
  return (
    <div className="policy-page-bcg-color">
      <div className="container-fluid">
        <div className="row g-0 align-items-center">
          <div className="col margin-code">
            <h1 className="policy-page-title">{title ? title : api.title}</h1>
            <article className="policy-page-text">
              <p>
                Inspiration Global is committed to fostering, cultivating and
                preserving a culture of diversity, equity and inclusion.
              </p>
              <p>
                The collective sum of the individual differences, life
                experiences, knowledge, inventiveness, innovation,
                self-expression, unique capabilities and talent that our
                employees invest in their work represents a significant part of
                not only our culture, but our reputation and company’s
                achievement as well.
              </p>
              <p>
                We embrace and encourage our employees’ differences in age,
                color, disability, ethnicity, family or marital status, gender
                identity or expression, language, national origin, physical and
                mental ability, political affiliation, race, religion, sexual
                orientation, socio-economic status, veteran status, and other
                characteristics that make our employees unique.
              </p>
              <p>
                Inspiration Global’s diversity initiatives are applicable—but
                not limited—to our practices and policies on recruitment and
                selection; compensation and benefits; professional development
                and training; promotions; transfers; social and recreational
                programs; layoffs; terminations; and the ongoing development of
                a work environment built on the premise of gender and diversity
                equity that encourages and enforces:
              </p>
              <ul>
                <li>
                  Respectful communication and cooperation between all
                  employees.
                </li>
                <li>
                  Teamwork and employee participation, permitting the
                  representation of all groups and employee perspectives.
                </li>
                <li>
                  Work/life balance through flexible work schedules to
                  accommodate employees’ varying needs.
                </li>
                <li>
                  Employer and employee contributions to the communities we
                  serve to promote a greater understanding and respect for the
                  diversity.
                </li>
              </ul>
              <div className="d-flex justify-content-end align-items-center">
                <button className="btn policy-page-btn">
                  Terms of Service{" "}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="policy-page-btn-svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.21967 14.7803C5.51256 15.0732 5.98744 15.0732 6.28033 14.7803L13.5 7.56066L13.5 13.25C13.5 13.6642 13.8358 14 14.25 14C14.6642 14 15 13.6642 15 13.25L15 5.75C15 5.33579 14.6642 5 14.25 5L6.75 5C6.33579 5 6 5.33579 6 5.75C6 6.16421 6.33579 6.5 6.75 6.5L12.4393 6.5L5.21967 13.7197C4.92678 14.0126 4.92678 14.4874 5.21967 14.7803Z"
                      fill="#5912E4"
                    />
                  </svg>
                </button>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
