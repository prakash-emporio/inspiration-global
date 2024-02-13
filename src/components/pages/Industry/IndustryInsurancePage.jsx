import {
  IndustryHero,
  IndustryFeatureCardLeftText,
  IndustryFeatureCardRightText,
  IndustryFeatureCardImage,
  IndustryEngagementModel,
  IndustryFeatureFirstCard,
} from "../../IndustryComponents/index.js";
import { Form } from "../../home/index.js";
import { SharedCard } from "../../Shared/index.js";
import { SoftwareCTA } from "../../SoftwareComponents/index.js";

const api = {
  id: "12674342",
  hero: {
    id: "234",
    img: "/industryhero.png",
    title: "Insurance",
    headline:
      "Faced with limited resources, tight deadlines, and a persistent state of crisis, leaders in the public service sector must carefully balance stability and speed in response to ever-changing needs.",
  },
  featureSection: {
    img: "/industrytestimonial.png",
    partOne: {
      text: "To thrive in the contemporary insurance marketplace, insurance carriers must transition from a primary focus on products and distribution to a customer-centric approach, particularly in a digital and mobile-first economy. People increasingly demand insurance providers to be accessible on their terms, with a strong emphasis on digital technology as the enabler. This entails delivering information through the preferred channels according to individual choices, ensuring that carriers, their distribution networks, staff, and customers can engage when, where, and how they desire",
    },
    partTwo: {
      text: "Achieving success in this context relies heavily on embracing the latest innovations in digital technology, data management, AI, cloud computing, mobile accessibility, and social engagement. It also necessitates a complete shift in mindset and execution within today's market",
    },
    partThree: {
      text: "Historically, carriers have heavily relied on agents and brokers. While these intermediaries remain valuable, the significance of providing a seamless experience across all channels has grown substantially. The primary strategy involves determining how direct, agent, and broker channels can collaborate harmoniously to create an effortless and efficient experience for both the carrier and the customer. Those companies that excel in this regard will enhance customer retention, lifetime value, profitability, and reduce overall operational costs",
    },
    partFour: {
      text: "Customers now anticipate a swifter, more transparent, and intuitively engaging experience than ever before. As other industries have elevated their standards for customer experience, expectations have risen across the board. In today's fiercely competitive landscape, where options abound, and disruption is ever-present, adopting a digital-first mindset is not merely advantageous but imperative",
    },
  },
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
      <IndustryHero
        key={api.hero.id}
        heroImage={api.hero.img}
        heroTitle={api.hero.title}
        heroHeadline={api.hero.headline}
      />
      <IndustryFeatureFirstCard text={api.featureSection.partOne.text} />
      <IndustryFeatureCardRightText text={api.featureSection.partTwo.text} />
      <IndustryFeatureCardImage featureImage={api.featureSection.img} />
      <IndustryFeatureCardLeftText text={api.featureSection.partThree.text} />
      <IndustryFeatureCardRightText text={api.featureSection.partFour.text} />
      <div className="container-fluid talent-card-section-wrapper pb-5">
        <h1 className="talent-feature-section-header py-5">
          A Few of Our Capabilities
        </h1>
        <div className="row p-lg-5">
          {api.engagementModels.map((model, index) => (
            <IndustryEngagementModel
              key={index}
              title={model.title}
              description={model.description}
            />
          ))}
        </div>
      </div>
      <SharedCard />
      <SoftwareCTA />
      <Form />
    </>
  );
}
