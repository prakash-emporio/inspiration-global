import { Form } from "../../components/home/index.js";
import {
  IndustryContent,
  IndustryEngagementModel,
} from "../../components/IndustryComponents/index.js";
import { SharedCard, SharedCTA } from "../../components/Shared/index.js";
import SharedHero from "../../components/Shared/SharedHero.jsx";

const api = {
  id: "12674345",
  hero: {
    id: "557",
    img: "/HigherEDHero.png",
    title: "Higher ED",
    headline:
      "Faced with limited resources, tight deadlines, and a persistent state of crisis, leaders in the public service sector must carefully balance stability and speed in response to ever-changing needs.",
    bodyImg: "/HigherEDBody.png",
  },
  contentSection: [
    {
      id: 1,
      text: "In today's ever-evolving higher education landscape, organizations must adopt an 'Always On' approach, recognizing the prevalence of a digital and mobile-first economy. People now increasingly demand education tailored to their terms, with digital technology expected to act as the enabler. This involves delivering information through the most suitable channels, based on individual preferences, ensuring that educational institutions, their staff, and students can engage at their convenience and in the manner they desire",
    },
    {
      id: 2,
      text: "Furthermore, prioritizing the enhancement of employee and business process efficiencies while delivering exceptional education is of paramount importance. Success hinges on embracing the latest innovations in digital technology, data utilization, AI, cloud computing, mobile accessibility, and social interaction, demanding a complete shift in mindset and execution within the current educational landscape",
    },
    {
      id: 3,
      text: "Navigating the path forward in higher education is often fraught with complexities and untapped opportunities. Institutions in higher education require fresh perspectives and advanced skillsets to pave the way. Our Higher Education practice at IG brings precisely these attributes to the table, enabling us to serve as a highly effective, collaborative partner. As a leading provider of professional services for higher education, we assist institutions worldwide in addressing intricate challenges from a multitude of angles.",
    },
    {
      id: 4,
      text: "We collaborate with a diverse range of colleges, universities, research institutions, community colleges, and higher education systems, creating innovative pathways to success for their students and the institutions themselves. We actively contribute to the broader conversation on matters such as access, affordability, persistence, and other critical issues, crafting pragmatic solutions tailored to the unique culture and governance structure of each individual institution. We are prepared to stand as your partners on your journey forward",
    },
    {
      id: 5,
      text: "Exploring new models, markets, and modalities alongside leaders from a wide array of colleges, universities, and higher education systems has granted us a unique perspective that we can apply to your specific needs. By delving into issues and opportunities specific to each institution, we've gained insights into challenges that resonate across the academic spectrum",
    },
  ],
  engagementModels: [
    {
      title: "Talent & Recruitment",
      description:
        "We offer strategic consulting services that bring clarity to your talent and recruitment efforts, facilitating accelerated growth and shaping the future of your business today.",
    },
    {
      title: "Technology & Engineering",
      description:
        "Our expertise drives growth through the assessment, enhancement, and innovation of your organization's technology utilization, fostering continuous improvement.",
    },
    {
      title: "Enterprise Platforms",
      description:
        "We amplify the value of your investments in enterprise platforms through precise implementation, customization, and optimization tailored to your specific needs.",
    },
    {
      title: "Azure Platform",
      description:
        "Elevate your infrastructure to new levels of efficiency and business success with our consultancy, migration, optimization, and tailored solutions spanning the complete Azure platform.",
    },
  ],
};

export default function IndustryHigherEdPage() {
  return (
    <>
      <div
        className="hero-background-img"
        style={{ backgroundImage: `url(${api.hero.img})` }}
      >
        <SharedHero title={api.hero.title} text={api.hero.headline} />
      </div>
      {api.contentSection.map((item) => (
        <IndustryContent
          key={item.id}
          index={item.id}
          text={item.text}
          bodyImg={api.hero.bodyImg}
        />
      ))}
      <div className="talent-card-section-wrapper pb-5">
        <div className="container">
          <h1 className="talent-feature-section-header py-5">
            A Few of Our Capabilities
          </h1>
          <div className="row py-md-5">
            {api.engagementModels.map((model, index) => (
              <IndustryEngagementModel
                key={index}
                title={model.title}
                description={model.description}
              />
            ))}
          </div>
        </div>
      </div>
      <SharedCard />
      <SharedCTA />
      <Form />
    </>
  );
}
