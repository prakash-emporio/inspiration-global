import {
  IndustryHero,
  IndustryFeatureFirstCard,
  IndustryFeatureCardLeftText,
  IndustryFeatureCardRightText,
  IndustryFeatureCardImage,
  IndustryEngagementModelForHealthCare as IndustryEngagementModel,
} from "../../components/IndustryComponents/index.js";
import { Form } from "../../components/home/index.js";
import { SharedCard } from "../../components/Shared/index.js";
import { SoftwareCTA } from "../../components/SoftwareComponents/index.js";

const api = {
  id: "12674345",
  hero: {
    id: "557",
    img: "/industryhero.png",
    title: "Health Care",
    headline:
      "Our mission is to empower our clients to meet the fundamental expectations every individual has when it comes to healthcare: access, experience, and outcomes",
  },
  featureSection: {
    img: "/industrytestimonial.png",
    partOne: {
      text: "Enhancing the Human Element in Healthcare",
    },
    partTwo: {
      text: "Every person deserves access to healthcare that is convenient, fair, and affordable, regardless of their location. In an age where industries such as banking and retail offer personalized and convenient services, people now expect a similar level of experience from their healthcare providers. This is why healthcare executives prioritize delivering highly personalized experiences as a top strategic goal. Improving access and enhancing the healthcare experience are pivotal in delivering better care, which, in turn, leads to more positive outcomes",
    },
    partThree: {
      text: "We assist our clients in addressing these crucial imperatives through intelligent, cloud-based solutions. These solutions increase resource capacity, enhance workforce productivity, facilitate data integration for personalized services across multiple channels, and elevate the overall quality of care and therapeutics",
    },
    partFour: {
      text: "In collaboration with the world's foremost healthcare payers, providers, and public health entities, we are placing individuals at the heart of healthcare. Our collective efforts are aimed at enhancing healthcare experiences for all, recognizing that it's time to embrace digital advancements in order to remain competitive. While many healthcare organizations are currently focused on renovation, we encourage a shift towards innovation, positioning your organization as a healthcare industry leader and disruptor",
    },
  },
  engagementModels: [
    {
      title: "Empowering Healthcare Organizations for Ongoing Disruption",
      description:
        "We specialize in preparing your healthcare organization to navigate and thrive amid continuous waves of disruption, both today and in the future",
    },
    {
      title: "Enhancing Cyber Resilience Across Your Healthcare Enterprise",
      description:
        "Our focus is on fortifying every facet of your healthcare business to ensure cyber resilience and security",
    },
    {
      title: "The Cloud's Role in Healthcare Transformation",
      description:
        "Cloud technology serves as the cornerstone for the future of healthcare, streamlining operations, fostering innovation, and enhancing patient care",
    },
    {
      title:
        "Elevating Payer Services with Advanced Analytics and Intelligence",
      description:
        "Incorporating advanced analytics and intelligence to attain exceptional results across diverse market landscapes.",
    },
    {
      title: "Empowering Public Sector Health with Data-Driven Insights",
      description:
        "Providing data-driven insights to public sector health organizations and the communities they are dedicated to serving.",
    },
  ],
};

export default function IndustryHealthCarePage() {
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
        <h1 className="talent-feature-section-header py-5">Our Capabilities</h1>
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
