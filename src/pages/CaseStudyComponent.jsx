export default function CaseStudyComponent({ details }) {
  const isFirst = false;
  return (
    <>
      {details.map((blogDetail) => (
        <>
          <div key={blogDetail.id} className="container g-5">
            <div className="row g-0">
              <div className="col">
                <h5 className="blog-paragraph-title">{blogDetail.title}</h5>
                <h5 className="blog-paragraph-subtitle">
                  {blogDetail.subTitle}
                </h5>
                <section className="blog-paragraph">
                  {blogDetail.content.map((text, index) => (
                    <p key={index}>{text}</p>
                  ))}
                </section>
              </div>
            </div>
          </div>
          {blogDetail.img && (
            <section className="container-fluid g-0">
              <div className="row g-5">
                <div className="col-md-7">
                  <img className="img-fluid" src={blogDetail.img} alt="" />
                </div>
                <div className="col-md-4 gap-2 case-study-image-side-text flex-column">
                  {blogDetail.img_content_title && (
                    <h5 className="case-study-title text-start">{blogDetail.img_content_title}</h5>
                  )}
                  {blogDetail.image_side_text.map((text) => (
                    <p className="opacity-75">{text}</p>
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      ))}
    </>
  );
}
