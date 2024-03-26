import { Form } from "../components/home/index.js";
import { SharedCard, SharedCTA } from "../components/Shared/index.js";
import { TalentFeatureSection } from "../components/TalentComponents/index.js";
import TalentContent from "../components/TalentComponents/TalentContent.jsx";
import TalentHeroNew from "../components/TalentComponents/TalentHeroNew.jsx";

const api = {
  imgUrl: "/talentHero.png",
  content: [
    {
      id: 1,
      title: "",
      text: "In today's dynamic business landscape, every organization needs highly proficient IT personnel. IG's versatile team excels in streamlining talent acquisition and staffing processes, effectively reducing recruitment timelines for clients spanning diverse industries. Recognizing the importance of allowing your recruiting team to focus on their primary tasks, we offer efficient staffing and talent solutions that complement your in-house efforts.",
    },
    {
      id: 2,
      title: "Seamless Staffing & Talent Solutions",
      text: "Our staffing and talent solutions facilitate swift fulfillment of your requirements with individuals well-versed in today's intricate IT positions. The IG talent team boasts decades of specialized experience in swiftly identifying the ideal candidates. Perfect Alignment We save you significant time, energy, and resources, all while ensuring that the talent we provide is not only qualified but also a seamless fit for your organizational culture.",
    },
    {
      id: 3,
      title: "Streamlined Approach",
      text: "IG employs pioneering and effective sourcing strategies, incorporating a targeted search process and relationship-building initiatives. We emphasize integrity, utilizing a robust applicant tracking system and strategically posting job openings across various social media platforms like LinkedIn, Twitter, Facebook, and more.",
    },
    {
      id: 4,
      title: "Holistic Evaluation",
      text: "Our comprehensive focus revolves around aligning with your company's strategy and culture while pinpointing the essential skills, competencies, and experiences required in individuals. We assess candidates based on their technical prowess, analytical capabilities, communication skills, ability to work in teams, cross-cultural adaptability, and results-oriented approach to ensure the perfect match. IG’s seasoned team makes sourcing and staffing simple. Clients look to us when faced with challenging resource issues for efficiency and reliability in finding the best qualified candidate for their jobs.",
    },
  ],
};

export default function TalentPage() {
  return (
    <>
      <div
        id="hero-talent-img"
        style={{ backgroundImage: `url(${api.imgUrl})` }}
      >
        <TalentHeroNew />
      </div>
      {api.content.map((item) => (
        <TalentContent
          key={item.id}
          index={item.id}
          title={item.title}
          text={item.text}
        />
      ))}
      <TalentFeatureSection />
      <SharedCard />
      <SharedCTA />
      <Form />
    </>
  );
}
