import softwareConsulting from "/softwareConsulting.png";
import softwareDesign from "/softwareDesign.png";
import softwareLift from "/softwareLift.png";
import softwareTalent from "/softwareTalent.png";
import "./CardSection.css";
import { useState } from "react";

export default function CardSection() {
  const [isHoveredConsulting, setIsHoveredConsulting] = useState(false);
  const [isHoveredLift, setIsHoveredLift] = useState(false);
  const [isHoveredDesign, setIsHoveredDesign] = useState(false);
  const [isHoveredTalent, setIsHoveredTalent] = useState(false);

  return (
    <>
      {/* First Card */}
      <div className="row my-5">
        <div className="col-7">
          <div className="card">
            <img className="" src={softwareConsulting} alt="" />
          </div>
        </div>

        <div className="col-5 position-relative">
          <div className="position-absolute top-50 start-0 translate-middle">
            <div className="card my-5 py-4 card-section-card-box shadow-lg">
              <div className="card-body">
                <h2 className="card-title card-section-title">Consulting</h2>
                <p className="card-text card-section-text">
                  Your business heavily relies on database platforms, middleware
                  engines, and ERP and CRM systems, which serve as the backbone
                  of your operations. Migrating these essential infrastructures
                  to the cloud can lead to cost savings, resource optimization,
                  and improved redundancy and disaster recovery capabilities.
                </p>
                {isHoveredConsulting && (
                  <p className="card-section-text">
                    Fusce senectus porttitor nulla nibh id risus at sollicitudin
                    cras. In mattis porttitor ultricies consequat nisi massa
                    tortor. Leo sed consectetur dolor justo consequat. In morbi
                    consequat est curabitur scelerisque nec ac turpis. Neque et
                    ac volutpat pellentesque ornare orci sed aliquam. Nunc
                    magnis sed fermentum venenatis turpis nulla eget diam.
                    <br />
                    Sollicitudin et mauris velit ut tortor massa id. Pharetra
                    tortor id porta ornare ultrices nunc. Praesent morbi
                    facilisis orci feugiat egestas eu sed. Convallis mauris eu
                    facilisi massa phasellus.
                  </p>
                )}
                <button
                  type="button"
                  className="btn software-btn"
                  onMouseMove={() =>
                    setIsHoveredConsulting(!isHoveredConsulting)
                  }
                >
                  {isHoveredConsulting ? "Learn Less" : "Learn More"}
                  {!isHoveredConsulting && (
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
                  {isHoveredConsulting && (
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
                        d="M0.21967 9.78033C0.512563 10.0732 0.987437 10.0732 1.28033 9.78033L8.5 2.56066V8.25C8.5 8.66421 8.83579 9 9.25 9C9.66421 9 10 8.66421 10 8.25V0.75C10 0.335787 9.66421 0 9.25 0H1.75C1.33579 0 1 0.335787 1 0.75C1 1.16421 1.33579 1.5 1.75 1.5H7.43934L0.21967 8.71967C-0.0732233 9.01256 -0.0732233 9.48744 0.21967 9.78033Z"
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

      {/* Second Card */}
      <div className="row my-5">
        <div className="col-5 position-relative content-card-section">
          <div className="position-absolute top-50 start-50 translate-middle-card-section">
            <div className="card my-5 card-section-card-box-2 shadow-lg">
              <div className="card-body">
                <h2 className="card-title card-section-title">Lift & Shift</h2>
                <p className="card-text card-section-text">
                  Your business heavily relies on database platforms, middleware
                  engines, and ERP and CRM systems, which serve as the backbone
                  of your operations. Migrating these essential infrastructures
                  to the cloud can lead to cost savings, resource optimization,
                  and improved redundancy and disaster recovery capabilities.
                </p>
                {isHoveredLift && (
                  <p className="card-section-text">
                    Fusce senectus porttitor nulla nibh id risus at sollicitudin
                    cras. In mattis porttitor ultricies consequat nisi massa
                    tortor. Leo sed consectetur dolor justo consequat. In morbi
                    consequat est curabitur scelerisque nec ac turpis. Neque et
                    ac volutpat pellentesque ornare orci sed aliquam. Nunc
                    magnis sed fermentum venenatis turpis nulla eget diam.
                    Sollicitudin et mauris velit ut tortor massa id. Pharetra
                    tortor id porta ornare ultrices nunc. Praesent morbi
                    facilisis orci feugiat egestas eu sed. Convallis mauris eu
                    facilisi massa phasellus.
                  </p>
                )}
                <button
                  type="button"
                  className="btn software-btn"
                  onMouseMove={() => setIsHoveredLift(!isHoveredLift)}
                >
                  {isHoveredLift ? "Learn Less" : "Learn More"}
                  {!isHoveredConsulting && (
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
                  {isHoveredConsulting && (
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
                        d="M0.21967 9.78033C0.512563 10.0732 0.987437 10.0732 1.28033 9.78033L8.5 2.56066V8.25C8.5 8.66421 8.83579 9 9.25 9C9.66421 9 10 8.66421 10 8.25V0.75C10 0.335787 9.66421 0 9.25 0H1.75C1.33579 0 1 0.335787 1 0.75C1 1.16421 1.33579 1.5 1.75 1.5H7.43934L0.21967 8.71967C-0.0732233 9.01256 -0.0732233 9.48744 0.21967 9.78033Z"
                        fill="#5912E4"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-7">
          <div className="card">
            <img
              src={softwareLift}
              className="img-fluid img-card-section"
              alt="..."
            />
          </div>
        </div>
      </div>

      {/* Third Card */}
      <div className="row my-5">
        <div className="col-7">
          <div className="card">
            <img className="" src={softwareDesign} alt="" />
          </div>
        </div>

        <div className="col-5 position-relative">
          <div className="position-absolute top-50 start-0 translate-middle">
            <div className="card my-5 py-4 card-section-card-box shadow-lg">
              <div className="card-body">
                <h2 className="card-title card-section-title">
                  Design & Build
                </h2>
                <p className="card-text card-section-text">
                  AWS offers a multitude of tools and services that facilitate
                  the rapid and efficient creation and deployment of
                  applications. Our developers take advantage of AWS's
                  scalability, reliability, and cost-effectiveness to build
                  high-performance applications with minimal effort.
                </p>
                {isHoveredDesign && (
                  <p className="card-section-text">
                    Fusce senectus porttitor nulla nibh id risus at sollicitudin
                    cras. In mattis porttitor ultricies consequat nisi massa
                    tortor. Leo sed consectetur dolor justo consequat. In morbi
                    consequat est curabitur scelerisque nec ac turpis. Neque et
                    ac volutpat pellentesque ornare orci sed aliquam. Nunc
                    magnis sed fermentum venenatis turpis nulla eget diam.
                    <br />
                    Sollicitudin et mauris velit ut tortor massa id. Pharetra
                    tortor id porta ornare ultrices nunc. Praesent morbi
                    facilisis orci feugiat egestas eu sed. Convallis mauris eu
                    facilisi massa phasellus.
                  </p>
                )}
                <button
                  type="button"
                  className="btn software-btn"
                  onMouseMove={() => setIsHoveredDesign(!isHoveredDesign)}
                >
                  {isHoveredDesign ? "Learn Less" : "Learn More"}
                  {!isHoveredConsulting && (
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
                  {isHoveredConsulting && (
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
                        d="M0.21967 9.78033C0.512563 10.0732 0.987437 10.0732 1.28033 9.78033L8.5 2.56066V8.25C8.5 8.66421 8.83579 9 9.25 9C9.66421 9 10 8.66421 10 8.25V0.75C10 0.335787 9.66421 0 9.25 0H1.75C1.33579 0 1 0.335787 1 0.75C1 1.16421 1.33579 1.5 1.75 1.5H7.43934L0.21967 8.71967C-0.0732233 9.01256 -0.0732233 9.48744 0.21967 9.78033Z"
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

      {/* Fourth Card */}
      <div className="row my-5">
        <div className="col-5 position-relative content-card-section">
          <div className="position-absolute top-50 start-50 translate-middle-card-section">
            <div className="card my-5 card-section-card-box-2 shadow-lg">
              <div className="card-body">
                <h2 className="card-title card-section-title">
                  Talent Sourcing
                </h2>
                <p className="card-text card-section-text">
                  Recruiting skilled technical employees with AWS expertise can
                  be challenging for traditional HR staff who lack the necessary
                  knowledge of the technology and niche skills required for AWS
                  roles. Our AWS knowledge and experience can help you find
                  better-qualified staff, while you focus on internal projects
                  and daily needs.
                </p>
                {isHoveredTalent && (
                  <p className="card-section-text">
                    Fusce senectus porttitor nulla nibh id risus at sollicitudin
                    cras. In mattis porttitor ultricies consequat nisi massa
                    tortor. Leo sed consectetur dolor justo consequat. In morbi
                    consequat est curabitur scelerisque nec ac turpis. Neque et
                    ac volutpat pellentesque ornare orci sed aliquam. Nunc
                    magnis sed fermentum venenatis turpis nulla eget diam.
                    Sollicitudin et mauris velit ut tortor massa id. Pharetra
                    tortor id porta ornare ultrices nunc. Praesent morbi
                    facilisis orci feugiat egestas eu sed. Convallis mauris eu
                    facilisi massa phasellus.
                  </p>
                )}
                <button
                  type="button"
                  className="btn software-btn"
                  onMouseMove={() => setIsHoveredTalent(!isHoveredTalent)}
                >
                  {isHoveredTalent ? "Learn Less" : "Learn More"}
                  {!isHoveredConsulting && (
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
                  {isHoveredConsulting && (
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
                        d="M0.21967 9.78033C0.512563 10.0732 0.987437 10.0732 1.28033 9.78033L8.5 2.56066V8.25C8.5 8.66421 8.83579 9 9.25 9C9.66421 9 10 8.66421 10 8.25V0.75C10 0.335787 9.66421 0 9.25 0H1.75C1.33579 0 1 0.335787 1 0.75C1 1.16421 1.33579 1.5 1.75 1.5H7.43934L0.21967 8.71967C-0.0732233 9.01256 -0.0732233 9.48744 0.21967 9.78033Z"
                        fill="#5912E4"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-7">
          <div className="card">
            <img
              src={softwareTalent}
              className="img-fluid img-card-section"
              alt="..."
            />
          </div>
        </div>
      </div>
    </>
  );
}
