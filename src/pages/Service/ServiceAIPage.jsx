import {
  ServicesHero,
  ServiceLeftText,
  ServiceRightText,
  ServiceBoldText,
  ServicesFeatureSection,
  ServiceSectionCard,
  ServiceFirstText
} from "../../components/ServicesComponents/index.js";
import { SharedCard } from "../../components/Shared/index.js";
import { Form } from "../../components/home/index.js";
import { SoftwareCTA } from "../../components/SoftwareComponents/index.js";

const api = {
  id: "1267433412322112445",
  hero: {
    id: "557",
    img: "/industryhero.png",
    title: "Artificial Intelligence",
    headline:
      "Unlocking your Potential with artificial intelligence and data is a must-have",
  },
  featureSection: {
    partOne: {
      text: "When you harness the capabilities of analytics, automation, and artificial intelligence (AI), you gain the ability to unearth hidden relationships within vast datasets. By implementing a well-planned strategy and adopting the right technology, you can strike a harmonious balance between speed, cost efficiency, and data quality, ultimately delivering quantifiable business value",
    },
    partTwo: {
      text: "It's a fusion of humans with machines, strategy with insights, cost reduction with automation, data with a clear purpose, and speed with unwavering precision. The transformative power of 'with' has never been more significant, and IG is at the forefront, empowering companies to harness this force, identify game-changing advantages, and operate with swifter, more precise decision-making while forging valuable connections with their customers",
    },
    partThree: {
      text: "We are here to guide you in leveraging the formidable capabilities and adaptability of AI, propelling your organization to new heights of excellence. From crafting a strategic framework for AI to innovating fresh business models and enhancing performance across your operational domains, we stand by your side throughout your journey to turn raw data into actionable insights",
    },
    partFour: {
      text: "With our robust suite of assets and intellectual property, combined with Managed Analytics & AI services (featuring cloud-based Robotic Process Automation Software as a Service and Insights as a Service), we translate cognitive technology into real-world applications. Collaborating closely with you, we engineer AI-driven products that position your business at the forefront of innovation",
    },
    partFive: {
      text: "Our expertise extends to modernizing your analytics and data processes, leveraging cutting-edge cloud-enabled platforms and big data architectures to empower analytics and AI-driven transformations",
    },
    partSix: {
      text: "Our team of robotic and intelligent automation specialists collaborates with you to implement automated processes that mimic human decision-making, interactions, and judgments. This approach uncovers novel opportunities that drive results at every tier of your business",
    },
    partSeven: {
      text: "In the end, we facilitate your journey to AI-driven insights and engagement through next-generation autonomous algorithms. These algorithms augment your human decision-making, generating actionable predictions and insights from your data while enabling a higher degree of autonomous decision-making",
    },
  },
  servicesCards: [
    {
      idx: 1,
      title: "Conceive & Develop",
      description:
        "From idea to prototype to engineering applications for tomorrows business, today – we deliver extraordinary value",
      list: [
        "Define user personas",
        "Refine Information and Page Architecture",
        "Define User Tasks and Flows",
        "Mobile first mindset",
        "Grid based design for consistency",
        "Usability Testing",
      ],
    },
    {
      idx: 2,
      title: "Modernize & Enhance",
      description:
        "Update applications and data sets to make them more useful, productive, and attractive to those who use them",
      list: [
        "Define user personas",
        "Refine Information and Page Architecture",
        "Define User Tasks and Flows",
        "Mobile first mindset",
        "Grid based design for consistency",
        "Usability Testing",
      ],
    },
    {
      idx: 3,
      title: "UX Design",
      description:
        "We leverage human centered design practices that engages users and elevates your products and applications",
      list: [
        "Define user personas",
        "Refine Information and Page Architecture",
        "Define User Tasks and Flows",
        "Mobile first mindset",
        "Grid based design for consistency",
        "Usability Testing",
      ],
    },
    {
      idx: 4,
      title: "Rapid Development",
      description:
        "With our breadth of experience in Low-Code platforms we can quickly develop a POC or App",
      list: [
        "Define user personas",
        "Refine Information and Page Architecture",
        "Define User Tasks and Flows",
        "Mobile first mindset",
        "Grid based design for consistency",
        "Usability Testing",
      ],
    },
    {
      idx: 5,
      title: "Lift and Shift",
      description:
        "With our proven cloud acceleration approach, you can move your applications and workloads to the cloud quickly",
      list: [
        "Define user personas",
        "Refine Information and Page Architecture",
        "Define User Tasks and Flows",
        "Mobile first mindset",
        "Grid based design for consistency",
        "Usability Testing",
      ],
    },
    {
      idx: 6,
      title: "Cloud Development",
      description:
        "Leverage a cloud first approach to developing applications with a flexible and scalable architecture",
      list: [
        "Define user personas",
        "Refine Information and Page Architecture",
        "Define User Tasks and Flows",
        "Mobile first mindset",
        "Grid based design for consistency",
        "Usability Testing",
      ],
    },
    {
      idx: 7,
      title: "Product Testing",
      description:
        "ID testing services can help you expedite time to market, increase quality, and reduce risk & costs",
      list: [
        "Define user personas",
        "Refine Information and Page Architecture",
        "Define User Tasks and Flows",
        "Mobile first mindset",
        "Grid based design for consistency",
        "Usability Testing",
      ],
    },
    {
      idx: 8,
      title: "Managed Services",
      description:
        "We can help you stabilize, optimize and manage your IT infrastructure with a 99.7% guaranteed SLA",
      list: [
        "Define user personas",
        "Refine Information and Page Architecture",
        "Define User Tasks and Flows",
        "Mobile first mindset",
        "Grid based design for consistency",
        "Usability Testing",
      ],
    },
  ],
};


export default function ServiceAIPage() {
  return (
    <>
      <ServicesHero
        key={api.hero.id}
        heroImage={api.hero.img}
        heroTitle={api.hero.title}
        heroHeadline={api.hero.headline}
      />
      <ServiceFirstText text={api.featureSection.partOne.text} />
      <ServiceBoldText text={api.featureSection.partTwo.text} />
      <ServiceLeftText text={api.featureSection.partThree.text} />
      <ServiceRightText text={api.featureSection.partFour.text} />
      <ServiceLeftText text={api.featureSection.partFive.text} />
      <ServiceRightText text={api.featureSection.partSix.text} />
      <ServiceLeftText text={api.featureSection.partSeven.text} />
      <ServiceSectionCard cards={api.servicesCards} />
      <ServicesFeatureSection />
      <SharedCard />
      <SoftwareCTA />
      <Form />
    </>
  );
}
