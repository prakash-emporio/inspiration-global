export default function RightTextLeftImage({ text, img }) {
  const API = {
    img: "/BlogImgOne.png",
    text: "This is something I want to do.",
  };
  return (
    <section className="container-fluid">
      <div className="row g-0">
        <div className="col-5 blog-image-side-text">{API.text}</div>
        <div className="col">
          <img className="img-fluid" src={API.img} alt="" />
        </div>
      </div>
    </section>
  );
}
