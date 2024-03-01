// import { useEffect } from "react";

export default function BlogComponent({ details }) {
  // useEffect(() => {
  //   console.log(details);
  // }, []);

  return (
    <div>
      {details.map((blogDetail, index) => (
        <div key={index} className="container-fluid my-lg-5">
          <div className="row">
            <div className="col">
              <h5 className="blog-paragraph-title">{blogDetail.title}</h5>
              <section className="blog-paragraph">
                {blogDetail.content.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </section>
            </div>
          </div>
          <section className="container-fluid g-0">
            <div className="row g-0">
              <div className="col-md-8">
                <img
                  className="img-fluid"
                  src={blogDetail.img}
                  alt=""
                />
              </div>
              <div className="col blog-image-side-text">
                {blogDetail.image_side_text}
              </div>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
}
