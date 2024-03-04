import CompanyTeamCard from "./CompanyTeamCard";

export default function CompanyTeamCardAdv() {
  const teamMembers = [
    {
      imageSrc: "/companyCardPeopleNine.png",
      name: "Suresh Madhuvarsu",
      designation: "Advisor",
      bio: "Suresh Madhuvarsu is a passionate product leader who enjoys everything about technology and software. He brings over 17 years of product management, design and development experience in Automotive, Utilities, Construction and Internet industries. Suresh totally believes in the mobile and digital led transformations and helps enterprises to increase their productivity with the help of his tech and product expertise. He spent a decade in building cloud platforms, mobile apps and brought scalability to several industries. He was part of three technology acquisitions and understands the M&A and integration process. He has a bachelor’s degree in Computer Science from Cochin University, India and MBA in entrepreneurship and marketing from University of California, Davis. He is an author, blogs and tutorials on technology and products.",
      linkedin: "https://www.linkedin.com/in/jogidaita/",
    },

    {
      imageSrc: "/companyCardPeopleTen.png",
      name: "Joel Kline, Ph.D",
      designation: "Advisor",
      bio: "Jogi’s responsibilities include driving vision, corporate business development and developing key partnerships and value creation. Additionally, Mr. Daita has extensive experience in talent sourcing and staffing in providing tier one technology talent to many of today’s most well known brands. Earlier, he served as CEO at Credo Technology Solutions and other technology firms. Prior to relocating to the US in 1999, he was based in Mumbai and gained valuable experience in technology startups, private equity, and M&A. Jogi has a strong passion and understanding of global technology markets, STEM education, and entrepreneurship. He serves as an advisor, investor and board member to numerous portfolio and partner firms. He holds both a BA in Economics and an MBA, and is a BITS, Pilani alumni.",
      linkedin: "https://www.linkedin.com/in/sushant-pednekar-538b0564/",
    },

    {
      imageSrc: "/companyCardPeopleEleven.png",
      name: "Shaun Donovan",
      designation: "Advisor",
      bio: "Jogi’s responsibilities include driving vision, corporate business development and developing key partnerships and value creation. Additionally, Mr. Daita has extensive experience in talent sourcing and staffing in providing tier one technology talent to many of today’s most well known brands. Earlier, he served as CEO at Credo Technology Solutions and other technology firms. Prior to relocating to the US in 1999, he was based in Mumbai and gained valuable experience in technology startups, private equity, and M&A. Jogi has a strong passion and understanding of global technology markets, STEM education, and entrepreneurship. He serves as an advisor, investor and board member to numerous portfolio and partner firms. He holds both a BA in Economics and an MBA, and is a BITS, Pilani alumni.",
      linkedin: "https://www.linkedin.com/in/prasad-devarapilli-628b51118/",
    },

    {
      imageSrc: "/companyCardPeopleTwelve.png",
      name: "Christian Caicedo",
      designation: "Advisor",
      bio: "Christian Caicedo MD, MBA, CPE, FACHE is an independent physician executive with operations, technology, and leadership expertise. He served as the System Senior Vice President and President of the Cumberland and Dauphin Regions, UPMC Pinnacle. Formerly the Vice President of Operations and Medical Director for West Shore Hospital, and Interim CMO, Pinnacle Health System. Dr. Caicedo also served as medical director for Swatara Emergency Medical Services. He currently serves as Medical Director for Susquehanna EMS. Dr. Caicedo published a paper on the use of Risperdal in children with Autism and its effect on aggressive behavior. He also is a contributing author for “In a Page, Signs and Symptoms,” a quick reference book for students and residents on some of the most common presenting medical complaints. Dr. Caicedo was also the lead social media physician for UPMC Pinnacle on Twitter. He completed a Healthcare MBA from Alvernia University where he was inducted to the Delta Mu Delta, International Honor Society in Business Administration, and Alpha Epsilon Lambda, Graduate Business School Honor Society.",
      linkedin: "https://www.linkedin.com/in/srinivas-majji-8b0bb68a/",
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
