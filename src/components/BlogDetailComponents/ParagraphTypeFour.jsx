export default function ParagraphTypeFour() {
  const text = [
    "Get out there and begin making an impact now that you’ve gained fresh knowledge and perspectives. It only takes a few of us to embrace such tactics and start a domino effect that will make our jobs more interesting and exciting!",
    "It is time to break the norm and hire people who are willing to go the extra mile.",
  ];

  return (
    <div className="container my-lg-5">
      <div className="row">
        <div className="col">
          <h2 className="blog-paragraph-title">Begin Value-Based Hiring</h2>
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
