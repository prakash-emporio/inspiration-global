import { useState } from "react";
import companyCardPeopleOne from "/companyCardPeopleOne.png";

function CompanyTeamCard({ member }) {
  const { imageSrc, name, designation, bio } = member;
  const [showBio, setShowBio] = useState(false);
  return (
    <div className="card company-card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={imageSrc}
            className="img-fluid rounded-start company-card-thumbnail"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h5 className="card-title company-card-title">{name}</h5>
              <p className="card-text company-designation">{designation}</p>
              <button
                className="btn company-card-btn"
                onClick={() => setShowBio(!showBio)}
              >
                {showBio ? "Hide Bio" : "Read Bio"}
              </button>
            </div>
            {showBio && (
              <p className="card-hover-text card-text company-card-detail">
                {bio}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CompanyCardWrapper() {
  const teamMembers = [
    {
      imageSrc: "/companyCardPeopleOne.png",
      name: "Jogi Daita",
      designation: "CEO",
      bio: "Jogi’s responsibilities include driving vision, corporate business development and developing key partnerships and value creation. Additionally, Mr. Daita has extensive experience in talent sourcing and staffing in providing tier one technology talent to many of today’s most well known brands. Earlier, he served as CEO at Credo Technology Solutions and other technology firms. Prior to relocating to the US in 1999, he was based in Mumbai and gained valuable experience in technology startups, private equity, and M&A. Jogi has a strong passion and understanding of global technology markets, STEM education, and entrepreneurship. He serves as an advisor, investor and board member to numerous portfolio and partner firms. He holds both a BA in Economics and an MBA, and is a BITS, Pilani alumni.",
    },

    {
      imageSrc: "/companyCardPeopleOne.png",
      name: "Sushant Pednekar",
      designation: "Partner",
      bio: "Jogi’s responsibilities include driving vision, corporate business development and developing key partnerships and value creation. Additionally, Mr. Daita has extensive experience in talent sourcing and staffing in providing tier one technology talent to many of today’s most well known brands. Earlier, he served as CEO at Credo Technology Solutions and other technology firms. Prior to relocating to the US in 1999, he was based in Mumbai and gained valuable experience in technology startups, private equity, and M&A. Jogi has a strong passion and understanding of global technology markets, STEM education, and entrepreneurship. He serves as an advisor, investor and board member to numerous portfolio and partner firms. He holds both a BA in Economics and an MBA, and is a BITS, Pilani alumni.",
    },

    {
      imageSrc: "/companyCardPeopleOne.png",
      name: "Prasad Devarapilli",
      designation: "Director Digital OpS",
      bio: "Jogi’s responsibilities include driving vision, corporate business development and developing key partnerships and value creation. Additionally, Mr. Daita has extensive experience in talent sourcing and staffing in providing tier one technology talent to many of today’s most well known brands. Earlier, he served as CEO at Credo Technology Solutions and other technology firms. Prior to relocating to the US in 1999, he was based in Mumbai and gained valuable experience in technology startups, private equity, and M&A. Jogi has a strong passion and understanding of global technology markets, STEM education, and entrepreneurship. He serves as an advisor, investor and board member to numerous portfolio and partner firms. He holds both a BA in Economics and an MBA, and is a BITS, Pilani alumni.",
    },

    {
      imageSrc: "/companyCardPeopleOne.png",
      name: "Srinivas Majji",
      designation: "Director Recruitment",
      bio: "Jogi’s responsibilities include driving vision, corporate business development and developing key partnerships and value creation. Additionally, Mr. Daita has extensive experience in talent sourcing and staffing in providing tier one technology talent to many of today’s most well known brands. Earlier, he served as CEO at Credo Technology Solutions and other technology firms. Prior to relocating to the US in 1999, he was based in Mumbai and gained valuable experience in technology startups, private equity, and M&A. Jogi has a strong passion and understanding of global technology markets, STEM education, and entrepreneurship. He serves as an advisor, investor and board member to numerous portfolio and partner firms. He holds both a BA in Economics and an MBA, and is a BITS, Pilani alumni.",
    },

    {
      imageSrc: "/companyCardPeopleOne.png",
      name: "Michael Marsowicz",
      designation: "PARTNER",
      bio: "Jogi’s responsibilities include driving vision, corporate business development and developing key partnerships and value creation. Additionally, Mr. Daita has extensive experience in talent sourcing and staffing in providing tier one technology talent to many of today’s most well known brands. Earlier, he served as CEO at Credo Technology Solutions and other technology firms. Prior to relocating to the US in 1999, he was based in Mumbai and gained valuable experience in technology startups, private equity, and M&A. Jogi has a strong passion and understanding of global technology markets, STEM education, and entrepreneurship. He serves as an advisor, investor and board member to numerous portfolio and partner firms. He holds both a BA in Economics and an MBA, and is a BITS, Pilani alumni.",
    },

    {
      imageSrc: "/companyCardPeopleOne.png",
      name: "Dinesh Juneja",
      designation: "PARTNER",
      bio: "Jogi’s responsibilities include driving vision, corporate business development and developing key partnerships and value creation. Additionally, Mr. Daita has extensive experience in talent sourcing and staffing in providing tier one technology talent to many of today’s most well known brands. Earlier, he served as CEO at Credo Technology Solutions and other technology firms. Prior to relocating to the US in 1999, he was based in Mumbai and gained valuable experience in technology startups, private equity, and M&A. Jogi has a strong passion and understanding of global technology markets, STEM education, and entrepreneurship. He serves as an advisor, investor and board member to numerous portfolio and partner firms. He holds both a BA in Economics and an MBA, and is a BITS, Pilani alumni.",
    },

    {
      imageSrc: "/companyCardPeopleOne.png",
      name: "Byron Hutchinson",
      designation: "PARTNER",
      bio: "Jogi’s responsibilities include driving vision, corporate business development and developing key partnerships and value creation. Additionally, Mr. Daita has extensive experience in talent sourcing and staffing in providing tier one technology talent to many of today’s most well known brands. Earlier, he served as CEO at Credo Technology Solutions and other technology firms. Prior to relocating to the US in 1999, he was based in Mumbai and gained valuable experience in technology startups, private equity, and M&A. Jogi has a strong passion and understanding of global technology markets, STEM education, and entrepreneurship. He serves as an advisor, investor and board member to numerous portfolio and partner firms. He holds both a BA in Economics and an MBA, and is a BITS, Pilani alumni.",
    },

    {
      imageSrc: "/companyCardPeopleOne.png",
      name: "Stephen Moritz",
      designation: "PARTNER",
      bio: "Jogi’s responsibilities include driving vision, corporate business development and developing key partnerships and value creation. Additionally, Mr. Daita has extensive experience in talent sourcing and staffing in providing tier one technology talent to many of today’s most well known brands. Earlier, he served as CEO at Credo Technology Solutions and other technology firms. Prior to relocating to the US in 1999, he was based in Mumbai and gained valuable experience in technology startups, private equity, and M&A. Jogi has a strong passion and understanding of global technology markets, STEM education, and entrepreneurship. He serves as an advisor, investor and board member to numerous portfolio and partner firms. He holds both a BA in Economics and an MBA, and is a BITS, Pilani alumni.",
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
