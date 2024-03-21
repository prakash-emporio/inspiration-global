import {
  IndustryContent,
  IndustryEngagementModel,
} from "../../components/IndustryComponents/index.js";
import { Form } from "../../components/home/index.js";
import { SharedCard } from "../../components/Shared/index.js";
import { SoftwareCTA } from "../../components/SoftwareComponents/index.js";
import SharedHero from "../../components/Shared/SharedHero.jsx";

const api = {
  id: "12674342",
  hero: {
    id: "234",
    img: "/InsuranceHero.png",
    title: "Insurance",
    headline:
      "Faced with limited resources, tight deadlines, and a persistent state of crisis, leaders in the public service sector must carefully balance stability and speed in response to ever-changing needs.",
      bodyImg: "/InsuranceBody.png",
  },
  contentSection: [
    {
      id: 1,
      text: "To thrive in the contemporary insurance marketplace, insurance carriers must transition from a primary focus on products and distribution to a customer-centric approach, particularly in a digital and mobile-first economy. People increasingly demand insurance providers to be accessible on their terms, with a strong emphasis on digital technology as the enabler. This entails delivering information through the preferred channels according to individual choices, ensuring that carriers, their distribution networks, staff, and customers can engage when, where, and how they desire",
    },
    {
      id: 2,
      text: "Achieving success in this context relies heavily on embracing the latest innovations in digital technology, data management, AI, cloud computing, mobile accessibility, and social engagement. It also necessitates a complete shift in mindset and execution within today's market",
    },
    {
      id: 3,
      text: "Historically, carriers have heavily relied on agents and brokers. While these intermediaries remain valuable, the significance of providing a seamless experience across all channels has grown substantially. The primary strategy involves determining how direct, agent, and broker channels can collaborate harmoniously to create an effortless and efficient experience for both the carrier and the customer. Those companies that excel in this regard will enhance customer retention, lifetime value, profitability, and reduce overall operational costs",
    },
    {
      id: 4,
      text: "Customers now anticipate a swifter, more transparent, and intuitively engaging experience than ever before. As other industries have elevated their standards for customer experience, expectations have risen across the board. In today's fiercely competitive landscape, where options abound, and disruption is ever-present, adopting a digital-first mindset is not merely advantageous but imperative",
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

export default function IndustryInsurancePage() {
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
      <SoftwareCTA />
      <Form />
    </>
  );
}
