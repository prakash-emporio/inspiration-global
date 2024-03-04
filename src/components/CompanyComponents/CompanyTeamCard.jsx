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
    <div className="card mb-3 company-card">
      <div className="row g-0">
        <div className="col-2">
          <img
            src={imageSrc}
            className="img-thumbnail rounded-start company-card-thumbnail"
            alt="..."
          />
        </div>
        <div
          className="col-10 company-card"
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseOver}
        >
          <div className="card-body px-md-5">
            <div className="row align-items-center">
              <div className="col-md-4">
                <h5 className="card-title company-card-title">{name}</h5>
              </div>
              <div className="col-md-4">
                <p className="card-text company-designation">{designation}</p>
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
                        {showFullBio ? "Read Less" : "Read More"}
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
