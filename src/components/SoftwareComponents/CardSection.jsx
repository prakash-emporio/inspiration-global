import { useState } from "react";
import "./CardSection.css";

const cardData = [
  {
    title: "Consulting",
    image: "/softwareConsulting.png",
    content:
      "At IG, we take pride in being your trusted partner for all your AWS consulting needs. With a wealth of experience and a deep understanding of AWS technologies, our team of highly skilled professionals is here to guide you through the intricate world of cloud computing, ensuring that you harness the full power of AWS to drive your business forward. We are passionate about helping you drive innovation, reducing costs, and ensuring the highest level of security and compliance. Let us take your AWS journey to new heights. Contact us today to get started on your path to AWS success",
  },
  {
    title: "Lift & Shift",
    image: "/softwareLift.png",
    content:
      "In today's digital age, businesses increasingly rely on critical components like database platforms, middleware engines, and ERP & CRM systems to keep their operations running seamlessly. These infrastructures serve as the backbone of modern enterprises, ensuring data integrity, application performance, and efficient resource utilization. However, to stay competitive and agile, it's imperative to consider migrating these essential components to the cloud. IG’s AWS Lift and Shift services provides a transformational approach that can lead to substantial benefits, including cost savings, resource optimization, and enhanced redundancy and disaster recovery capabilities",
  },
  {
    title: "Design & Build",
    image: "/softwareDesign.png",
    content:
      "At IG, our team of AWS-certified experts is dedicated to helping you design, build, and deploy high-performance applications on AWS. We understand the importance of scalability, reliability, and cost-effectiveness in today's competitive landscape. Whether you're developing a cutting-edge web application or a data-driven backend service, we have the knowledge and experience to guide you in utilizing AWS's vast resources to make your application a success. Contact us today to embark on your journey to high-performance application development with AWS",
  },
  {
    title: "Talent Sourcing",
    image: "/softwareTalent.png",
    content:
      "We understand the unique challenges associated with recruiting AWS professionals. With our specialized knowledge and experience, we become your strategic partner in talent acquisition, ensuring that you have the right people in place to execute your AWS projects successfully. We not only find top-tier AWS talent but also assist in the onboarding process and provide ongoing support to help integrate these experts into your team seamlessly. Don't let the complexities of AWS talent acquisition hold your organization back. Contact us today and let us take the lead in sourcing the skilled professionals your AWS projects require, so you can focus on driving innovation and growth within your business",
  },
];

const Card = ({ title, image, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 250;
  const trimmedContent =
    content.length > maxLength
      ? content.substring(0, maxLength) + "..."
      : content;

  return (
    <div className="container-fluid g-0 my-5">
      <div className="row g-0">
        <div className="col-12 col-lg-8 software-card-section-image-wrapper">
          <img className="img-fluid" src={image} alt="software hero img" />
        </div>
        <div className="col-12 col-lg-4 software-card-section-content-wrapper">
          <div className="card my-5 card-section-card-box shadow-lg">
            <div className="my-4 py-2 px-5">
              <h2 className="software-card-section-title">{title}</h2>
              <p className="software-card-section-text pt-4">
                {isExpanded ? content : trimmedContent}
              </p>
              {content.length > maxLength && (
                <button
                  type="button"
                  className="btn software-btn my-3"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? "Learn Less" : "Learn More"}
                  {isExpanded ? (
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
                  ) : (
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
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardTypeTwo = ({ title, image, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 150;
  const trimmedContent =
    content.length > maxLength
      ? content.substring(0, maxLength) + "..."
      : content;

  return (
    <div className="container-fluid g-0 my-5">
      <div className="row g-0">
        <div className="col-12 col-lg-4 software-card-section-content-wrapper-two section-two">
          <div className="card my-5 card-section-card-box shadow-lg">
            <div className="my-4 px-5">
              <h2 className="software-card-section-title">{title}</h2>
              <p className="software-card-section-text pt-4">
                {isExpanded ? content : trimmedContent}
              </p>
              {content.length > maxLength && (
                <button
                  type="button"
                  className="btn software-btn my-3"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? "Learn Less" : "Learn More"}
                  {isExpanded ? (
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
                  ) : (
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
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-8 software-card-section-image-wrapper-two section-one">
          <img className="img-fluid" src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

const CardSection = () => {
  return (
    <>
      {cardData.map((card, index) => {
        return index % 2 === 0 ? (
          <Card key={index} {...card} />
        ) : (
          <CardTypeTwo key={index} {...card} />
        );
      })}
    </>
  );
};

export default CardSection;
