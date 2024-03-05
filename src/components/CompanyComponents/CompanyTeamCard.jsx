import { useState } from "react";
import { NavLink } from "react-router-dom";
import companybtn from "/companybtn.png";

export default function CompanyTeamCard({ member }) {
  const { imageSrc, name, designation, bio, linkedin } = member;
  const [showFullBio, setShowFullBio] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(!isHovered);
  };

  const toggleBio = () => {
    setShowFullBio(!showFullBio);
  };

  return (
    <div onMouseEnter={handleMouseOver}
    onMouseLeave={handleMouseOver} className="card mb-3 company-card">
      <div className="row g-0">
        <div className="col-md-2 d-flex justify-content-center align-items-start">
          <img
            src={imageSrc}
            className="img-thumbnail rounded-start company-card-thumbnail"
            alt="..."
          />
        </div>
        <div
          className="col-md-10 company-card"
        >
          <div className="card-body px-md-5">
            <div className="row align-items-center">
              <div className="col">
                <h5 className="company-card-title">{name}</h5>
              </div>
              <div className="col">
                <p className="card-text company-designation text-uppercase">
                  {designation}
                </p>
              </div>
              {isHovered && (
                <>
                  <div className="col-2">
                    <NavLink to={linkedin}>
                      <img
                        className="object-fit-contain linkedin-btn"
                        src={companybtn}
                        alt="linkedin-btn"
                      />
                    </NavLink>
                  </div>

                  <p className="card-hover-text py-3 company-card-detail">
                    {showFullBio ? bio : bio.substring(0, 200) + "..."}
                    <button
                      className="btn company-card-btn"
                      onClick={toggleBio}
                    >
                      {showFullBio ? "Close" : "Read Bio"}
                    </button>
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
