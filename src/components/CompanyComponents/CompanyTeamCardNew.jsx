import CompanyTeamCard from "./CompanyTeamCard";

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
      bio: "Sushant is an attorney by trade, providing counsel to growth companies in traditional and emerging industries. He works with the executive leadership at Oxygen Ventures to integrate legal functions across our diverse portfolio. In his advisory role, Sushant supports OV’s existing operations and plans for future growth, while managing risk and corporate compliance. He holds a J.D. from Symbiosis Law School, India, and has completed his Master’s in Law from the University of California, Berkeley, School of Law.",
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
      bio: "Michael is a digital, technology and marketing consultant who guides brands through transformative digital experiences, optimizing interactions across channels, innovative technologies and the overarching impact on their prospects, customers and employees. Michael has been in digital consulting and professional services for 20+ years and excels at bridging the gap between marketing, technology and business – translating a better customer experience into demonstrable financial returns. Working with CMO’s, CIO’s, CxO’ creative directors, business analysts and technology and marketing teams he looks to educate and further drive forward-thinking initiatives that generate longer-lasting results, push boundaries, and provide deeper engagement. Michael continuously inspires, motivates, and engages the teams he works with.",
      linkedin: "https://www.linkedin.com/in/michaelmarsowicz/",
    },

    {
      imageSrc: "/companyCardPeopleSix.png",
      name: "Dinesh Juneja",
      designation: "PARTNER",
      bio: "Dinesh is a strategic thinker, digital marketer and brand architect by profession. Starting his career at a very early age, Dinesh has established two boutique digital agencies in the past 10 years and has serviced over 150 brands across various industry segments. Dinesh has been a part of creative, digital and technology pursuits for global firms, international brands and newly funded startups. The diverse set of experiences and knowledge pool has shaped his deep understanding of the digital spectrum and propels his passion within this space. Right from building digital marketing strategies to creating execution plans, defining channels and strategies to leverage the mediums effectively, he is involved in using data and insights to make brands win customers. During his leisure time, Dinesh is usually found engaging with students at various colleges around topics pertaining to startups, product-market fit, go-to-market strategies and bootstrapping.",
      linkedin: "https://www.linkedin.com/in/dineshjuneja/",
    },

    {
      imageSrc: "/companyCardPeopleSeven.png",
      name: "Byron Hutchinson",
      designation: "PARTNER",
      bio: "Byron is a technology solution consultant with 20+ years of experience in building relationships with stakeholders, executives, managing sales cycles, solution ideating and deliver, partner channel management, team building, technology discovery, and revenue generation. His experience comes from a background that started out in sales for a software company that provided global enterprise connectivity solutions for disparate email systems and directories. Following that acquisition by Lotus Development Corp, the IBM acquisition of Lotus, Byron remained in middleware integration consulting and delivery providing enterprise clients application and data solutions. After leaving IBM, Byron continued his career at SunGard Higher Education, managing the various software, hardware, and consulting partners. In 2007, Byron founded BT Consulting, and established the company as a premiere minority-owned Information Technology Consulting and Staffing organization that partners with other leading Technology firms to consult and deliver enterprise solutions around Cloud, IoT, AI, ML, and Digital.”",
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
