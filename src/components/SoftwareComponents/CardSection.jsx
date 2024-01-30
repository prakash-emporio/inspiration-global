import { useState } from "react";
import "./CardSection.css";

const cardData = [
  {
    title: "Consulting",
    image: "/softwareConsulting.png",
    content1:
      "At IG, we offer a range of consulting services and expertise in AWS technologies. Our team of skilled professionals is well- versed in AWS solutions and can provide tailored guidance to help clients optimize their use of these tools",
    content2:
      "Fusce senectus porttitor nulla nibh id risus at sollicitudin cras. In mattis porttitor ultricies consequat",
  },
  {
    title: "Lift & Shift",
    image: "/softwareLift.png",
    content1:
      "Your business heavily relies on database platforms, middleware engines, and ERP and CRM systems, which serve as the backbone of your operations. Migrating these essential infrastructures to the cloud can lead to cost savings, resource optimization, and improved redundancy and disaster recovery capabilities.",
      content2:
      "Fusce senectus porttitor nulla nibh id risus",
  },
  {
    title: "Design & Build",
    image: "/softwareDesign.png",
    content1:
      "AWS offers a multitude of tools and services that facilitate the rapid and efficient creation and deployment of applications. Our developers take advantage of AWS's scalability, reliability, and cost-effectiveness to build high- performance applications with minimal effort.",
      content2:
      "Fusce senectus porttitor nulla nibh id risus at sollicitudin cras. In mattis porttitor",
  },
  {
    title: "Talent Sourcing",
    image: "/softwareTalent.png",
    content1:
      "Recruiting skilled technical employees with AWS expertise can be challenging for traditional HR staff who lack the necessary knowledge of the technology and niche skills required for AWS roles. Our AWS knowledge and experience can help you find better-qualified staff, while you focus on internal projects and daily needs.",
      content2:
      "Fusce senectus porttitor nulla nibh id risus at ",
  },
];

const Card = ({ title, image, content1, content2 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="container-fluid g-0 my-5">
      <div className="row g-0">
        <div className="col-12 col-lg-8 software-card-section-image-wrapper">
          <img className="img-fluid" src={image} alt="" />
        </div>
        <div className="col-12 col-lg-4 software-card-section-content-wrapper">
            <div className="card my-5 card-section-card-box shadow-lg">
              <div className="my-4 py-2 px-5">
                <h2 className="software-card-section-title">{title}</h2>
                <p className="software-card-section-text pt-4">{content1}</p>
                {isHovered && (
                  <div>
                    <p className="software-card-section-text">{content2}</p>
                  </div>
                )}
                <button
                  type="button"
                  className="btn software-btn my-3"
                  onMouseMove={() => setIsHovered(!isHovered)}
                >
                  {isHovered ? "Learn Less" : "Learn More"}
                  {!isHovered && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="ms-2"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.7803 5.21967C14.4874 4.92678 14.0126 4.92678 13.7197 5.21967L6.5 12.4393L6.5 6.75C6.5 6.33579 6.16421 6 5.75 6C5.33579 6 5 6.33579 5 6.75L5 14.25C5 14.6642 5.33579 15 5.75 15L13.25 15C13.6642 15 14 14.6642 14 14.25C14 13.8358 13.6642 13.5 13.25 13.5L7.56066 13.5L14.7803 6.28033C15.0732 5.98744 15.0732 5.51256 14.7803 5.21967Z"
                        fill="#5912E4"
                      />
                    </svg>
                  )}
                  {isHovered && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      className="ms-2"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.21967 14.7803C5.51256 15.0732 5.98744 15.0732 6.28033 14.7803L13.5 7.56066V13.25C13.5 13.6642 13.8358 14 14.25 14C14.6642 14 15 13.6642 15 13.25V5.75C15 5.33579 14.6642 5 14.25 5H6.75C6.33579 5 6 5.33579 6 5.75C6 6.16421 6.33579 6.5 6.75 6.5H12.4393L5.21967 13.7197C4.92678 14.0126 4.92678 14.4874 5.21967 14.7803Z"
                        fill="#5912E4"
                      />
                    </svg>
                  )}
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardTypeTwo = ({ title, image, content1, content2 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="container-fluid g-0 my-5">
      <div className="row g-0">
        <div className="col-12 col-lg-4 software-card-section-content-wrapper-two">
            <div className="card my-5 card-section-card-box shadow-lg">
              <div className="my-4 px-5">
                <h2 className="software-card-section-title">{title}</h2>
                <p className="software-card-section-text pt-4">{content1}</p>
                {isHovered && (
                  <div>
                    <p className="software-card-section-text">{content2}</p>
                  </div>
                )}
                <button
                  type="button"
                  className="btn software-btn my-3"
                  onMouseMove={() => setIsHovered(!isHovered)}
                >
                  {isHovered ? "Learn Less" : "Learn More"}
                  {!isHovered && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="ms-2"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.7803 5.21967C14.4874 4.92678 14.0126 4.92678 13.7197 5.21967L6.5 12.4393L6.5 6.75C6.5 6.33579 6.16421 6 5.75 6C5.33579 6 5 6.33579 5 6.75L5 14.25C5 14.6642 5.33579 15 5.75 15L13.25 15C13.6642 15 14 14.6642 14 14.25C14 13.8358 13.6642 13.5 13.25 13.5L7.56066 13.5L14.7803 6.28033C15.0732 5.98744 15.0732 5.51256 14.7803 5.21967Z"
                        fill="#5912E4"
                      />
                    </svg>
                  )}
                  {isHovered && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      className="ms-2"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.21967 14.7803C5.51256 15.0732 5.98744 15.0732 6.28033 14.7803L13.5 7.56066V13.25C13.5 13.6642 13.8358 14 14.25 14C14.6642 14 15 13.6642 15 13.25V5.75C15 5.33579 14.6642 5 14.25 5H6.75C6.33579 5 6 5.33579 6 5.75C6 6.16421 6.33579 6.5 6.75 6.5H12.4393L5.21967 13.7197C4.92678 14.0126 4.92678 14.4874 5.21967 14.7803Z"
                        fill="#5912E4"
                      />
                    </svg>
                  )}
                </button>
              </div>
          </div>
        </div>
        <div className="col-12 col-lg-8 software-card-section-image-wrapper-two">
          <img className="img-fluid" src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

const CardSection = () => {
  return (
    <>
      <Card key={0} {...cardData[0]} />
      <CardTypeTwo key={1} {...cardData[1]} />
      <Card key={2} {...cardData[2]} />
      <CardTypeTwo key={3} {...cardData[3]} />
    </>
  );
};

export default CardSection;
