export default function LeftImageRightText({ img, text }) {
  const API = {
    img: "/BlogImgOne.png",
    text: "Agreeableness Conscientiousness Extroversion Openness Neuroticism",
  };

  return (
    <section className="container-fluid g-0">
      <div className="row g-0">
        <div className="col-md-8">
          <img className="img-fluid" src={API.img} alt="" />
        </div>
        <div className="col blog-image-side-text">{API.text}</div>
      </div>
    </section>
  );
}
