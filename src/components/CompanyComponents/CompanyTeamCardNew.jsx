import { useState } from "react";
import companybtn from "/companybtn.png";
import { NavLink } from "react-router-dom";

function CompanyTeamCard({ member }) {
  const { imageSrc, name, designation, bio, linkedin } = member;
  const [showBio, setShowBio] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(!isHovered);
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
          <div className="card-body px-5">
            <div className="row align-items-center">
              <div className="col-4">
                <h5 className="card-title company-card-title">{name}</h5>
              </div>
              <div className="col-4">
                <p className="card-text company-designation">{designation}</p>
              </div>
              {isHovered && (
                <>
                  <div className="col-2">
                    <button
                      className="btn company-card-btn"
                      onClick={() => setShowBio(!showBio)}
                    >
                      {showBio ? "Close" : "Read Bio"}
                    </button>
                  </div>
                  <div className="col-2">
                    <NavLink to={linkedin}>
                      <img
                        className="object-fit-contain linkedin-btn"
                        src={companybtn}
                        alt="linkedin-btn"
                      />
                    </NavLink>
                  </div>
                </>
              )}
            </div>
            {showBio && (
              <p className="card-hover-text py-3 company-card-detail">{bio}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CompanyTeamCardNew() {
  const teamMembers = [
    {
      imageSrc: "/companyCardPeopleOne.png",
      name: "Jogi Daita",
      designation: "CEO",
      bio: "Jogi’s responsibilities include driving vision, corporate business development and developing key partnerships and value creation. Additionally, Mr. Daita has extensive experience in talent sourcing and staffing in providing tier one technology talent to many of today’s most well known brands. Earlier, he served as CEO at Credo Technology Solutions and other technology firms. Prior to relocating to the US in 1999, he was based in Mumbai and gained valuable experience in technology startups, private equity, and M&A. Jogi has a strong passion and understanding of global technology markets, STEM education, and entrepreneurship. He serves as an advisor, investor and board member to numerous portfolio and partner firms. He holds both a BA in Economics and an MBA, and is a BITS, Pilani alumni.",
      linkedin: "https://www.linkedin.com/in/jogidaita/",
    },

    {
      imageSrc: "/companyCardPeopleTwo.png",
      name: "Sushant Pednekar",
      designation: "PARTNER",
      bio: "Jogi’s responsibilities include driving vision, corporate business development and developing key partnerships and value creation. Additionally, Mr. Daita has extensive experience in talent sourcing and staffing in providing tier one technology talent to many of today’s most well known brands. Earlier, he served as CEO at Credo Technology Solutions and other technology firms. Prior to relocating to the US in 1999, he was based in Mumbai and gained valuable experience in technology startups, private equity, and M&A. Jogi has a strong passion and understanding of global technology markets, STEM education, and entrepreneurship. He serves as an advisor, investor and board member to numerous portfolio and partner firms. He holds both a BA in Economics and an MBA, and is a BITS, Pilani alumni.",
      linkedin: "https://www.linkedin.com/in/sushant-pednekar-538b0564/",
    },

    {
      imageSrc: "/companyCardPeopleThree.png",
      name: "Prasad Devarapilli",
      designation: "Director Digital OpS",
      bio: "Jogi’s responsibilities include driving vision, corporate business development and developing key partnerships and value creation. Additionally, Mr. Daita has extensive experience in talent sourcing and staffing in providing tier one technology talent to many of today’s most well known brands. Earlier, he served as CEO at Credo Technology Solutions and other technology firms. Prior to relocating to the US in 1999, he was based in Mumbai and gained valuable experience in technology startups, private equity, and M&A. Jogi has a strong passion and understanding of global technology markets, STEM education, and entrepreneurship. He serves as an advisor, investor and board member to numerous portfolio and partner firms. He holds both a BA in Economics and an MBA, and is a BITS, Pilani alumni.",
      linkedin: "https://www.linkedin.com/in/prasad-devarapilli-628b51118/",
    },

    {
      imageSrc: "/companyCardPeopleFour.png",
      name: "Srinivas Majji",
      designation: "Director Recruitment",
      bio: "Jogi’s responsibilities include driving vision, corporate business development and developing key partnerships and value creation. Additionally, Mr. Daita has extensive experience in talent sourcing and staffing in providing tier one technology talent to many of today’s most well known brands. Earlier, he served as CEO at Credo Technology Solutions and other technology firms. Prior to relocating to the US in 1999, he was based in Mumbai and gained valuable experience in technology startups, private equity, and M&A. Jogi has a strong passion and understanding of global technology markets, STEM education, and entrepreneurship. He serves as an advisor, investor and board member to numerous portfolio and partner firms. He holds both a BA in Economics and an MBA, and is a BITS, Pilani alumni.",
      linkedin: "https://www.linkedin.com/in/srinivas-majji-8b0bb68a/",
    },

    {
      imageSrc: "/companyCardPeopleFive.png",
      name: "Michael Marsowicz",
      designation: "PARTNER",
      bio: "Jogi’s responsibilities include driving vision, corporate business development and developing key partnerships and value creation. Additionally, Mr. Daita has extensive experience in talent sourcing and staffing in providing tier one technology talent to many of today’s most well known brands. Earlier, he served as CEO at Credo Technology Solutions and other technology firms. Prior to relocating to the US in 1999, he was based in Mumbai and gained valuable experience in technology startups, private equity, and M&A. Jogi has a strong passion and understanding of global technology markets, STEM education, and entrepreneurship. He serves as an advisor, investor and board member to numerous portfolio and partner firms. He holds both a BA in Economics and an MBA, and is a BITS, Pilani alumni.",
      linkedin: "https://www.linkedin.com/in/michaelmarsowicz/",
    },

    {
      imageSrc: "/companyCardPeopleSix.png",
      name: "Dinesh Juneja",
      designation: "PARTNER",
      bio: "Jogi’s responsibilities include driving vision, corporate business development and developing key partnerships and value creation. Additionally, Mr. Daita has extensive experience in talent sourcing and staffing in providing tier one technology talent to many of today’s most well known brands. Earlier, he served as CEO at Credo Technology Solutions and other technology firms. Prior to relocating to the US in 1999, he was based in Mumbai and gained valuable experience in technology startups, private equity, and M&A. Jogi has a strong passion and understanding of global technology markets, STEM education, and entrepreneurship. He serves as an advisor, investor and board member to numerous portfolio and partner firms. He holds both a BA in Economics and an MBA, and is a BITS, Pilani alumni.",
      linkedin: "https://www.linkedin.com/in/dineshjuneja/",
    },

    {
      imageSrc: "/companyCardPeopleSeven.png",
      name: "Byron Hutchinson",
      designation: "PARTNER",
      bio: "Jogi’s responsibilities include driving vision, corporate business development and developing key partnerships and value creation. Additionally, Mr. Daita has extensive experience in talent sourcing and staffing in providing tier one technology talent to many of today’s most well known brands. Earlier, he served as CEO at Credo Technology Solutions and other technology firms. Prior to relocating to the US in 1999, he was based in Mumbai and gained valuable experience in technology startups, private equity, and M&A. Jogi has a strong passion and understanding of global technology markets, STEM education, and entrepreneurship. He serves as an advisor, investor and board member to numerous portfolio and partner firms. He holds both a BA in Economics and an MBA, and is a BITS, Pilani alumni.",
      linkedin: "https://www.linkedin.com/in/bchutchinson/",
    },

    {
      imageSrc: "/companyCardPeopleEight.png",
      name: "Stephen Moritz",
      designation: "PARTNER",
      bio: "Jogi’s responsibilities include driving vision, corporate business development and developing key partnerships and value creation. Additionally, Mr. Daita has extensive experience in talent sourcing and staffing in providing tier one technology talent to many of today’s most well known brands. Earlier, he served as CEO at Credo Technology Solutions and other technology firms. Prior to relocating to the US in 1999, he was based in Mumbai and gained valuable experience in technology startups, private equity, and M&A. Jogi has a strong passion and understanding of global technology markets, STEM education, and entrepreneurship. He serves as an advisor, investor and board member to numerous portfolio and partner firms. He holds both a BA in Economics and an MBA, and is a BITS, Pilani alumni.",
      linkedin: "https://www.linkedin.com/in/stephenmoritz/",
    },
  ];

  return (
    <div>
      {teamMembers.map((member, index) => (
        <CompanyTeamCard key={index} member={member} />
      ))}
    </div>
  );
}
