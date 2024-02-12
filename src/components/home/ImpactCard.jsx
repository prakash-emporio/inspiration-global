import content1 from "/content1.jpg";

const ImpactCardData = {
  title: "Product Engineering with Impact",
  text: "Transform innovative ideas into solutions that revolutionize industries and enrich lives. \n Our public sector approach combines the power of human creativity, strategy, advanced technology, and a culture that prioritizes timely and effective implementation. Through this approach, we enable leaders in public sector organizations to transform their ambitions into tangible results. \n By leveraging existing resources and expertise to their fullest potential, we assist in establishing the groundwork for meaningful progress that generates long-term benefits for citizens and strengthens the capacity of government.",
  buttonText: "Dive In",
  image: content1,
};

export default function ImpactCard() {
  const paragraphs = ImpactCardData.text.split("\n");
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="2000"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      className="card-wrapper content-text-wrapper card-wrapper-color-1"
    >
      <div className="container-fluid g-0">
        <div className="row g-0">
          <div className="col-lg-8">
            <img src={ImpactCardData.image} className="img-fluid" alt="..." />
          </div>
          <div className="col-lg-4">
            <div className="card-body first-content-card-body">
              <h1 className="card-title-1 p-lg-5">{ImpactCardData.title}</h1>
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="card-text-1">
                  {paragraph}
                </p>
              ))}
              <button className="btn first-btn" href="#" role="button">
                {ImpactCardData.buttonText}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="ms-2 first-content-svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.7803 5.21967C14.4874 4.92678 14.0126 4.92678 13.7197 5.21967L6.5 12.4393L6.5 6.75C6.5 6.33579 6.16421 6 5.75 6C5.33579 6 5 6.33579 5 6.75L5 14.25C5 14.6642 5.33579 15 5.75 15L13.25 15C13.6642 15 14 14.6642 14 14.25C14 13.8358 13.6642 13.5 13.25 13.5L7.56066 13.5L14.7803 6.28033C15.0732 5.98744 15.0732 5.51256 14.7803 5.21967Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
