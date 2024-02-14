import {
  ServicesHero,
  ServiceLeftText,
  ServiceRightText,
  ServiceBoldText,
  ServicesFeatureSection,
  ServiceSectionCard,
  ServiceFirstText
} from "../../ServicesComponents/index.js";
import { SharedCard } from "../../Shared/index.js";
import { Form } from "../../home/index.js";
import { SoftwareCTA } from "../../SoftwareComponents/index.js";

const api = {
  id: "1267433412322112445",
  hero: {
    id: "557",
    img: "/industryhero.png",
    title: "Cloud Services",
    headline:
      "We work towards advancing the cloud Journey towards enhanced resilience",
  },
  featureSection: {
    partOne: {
      text: "In response to recent disruptions, organizations have swiftly embraced cloud and digital transformation, bolstering their resilience. However, the next phase involves a reinvention aimed at achieving deeper integration within a cohesive cloud strategy. This transformation is essential to unlock delayed value and streamline costs",
    },
    partTwo: {
      text: "Today's forward-thinking organizations view the cloud as a pivotal enabler of business growth and exceptional experiences for both customers and employees. They recognize that it transcends mere migration; it is a pathway to fostering innovation, accelerating growth, and maintaining a competitive edge",
    },
    partThree: {
      text: "Whether you're embarking on your cloud journey or planning a migration, the choice of the right partner can make all the difference between success and failure. IG's consultants and architects specialize in guiding companies through the intricacies of cloud platforms, enterprise architecture, integration, licensing, and toolsets. Among these facets, cost savings emerge as a crucial focal point, especially in times of economic uncertainty",
    },
    partFour: {
      text: "Amid the promise of extensive cloud transformation and the complexities that must be addressed, such as rethinking operating models and talent acquisition, organizations find themselves at a crossroads. They've already reaped the low-hanging fruit of cloud adoption but must now redouble their efforts to fully realize its potential. How do we know this? Because those who consistently achieve positive outcomes are the avid adopters who view the cloud as an ever-evolving journey, not just a destination",
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


export default function ServiceCloudServicePage() {
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
      <ServiceSectionCard cards={api.servicesCards} />
      <ServicesFeatureSection />
      <SharedCard />
      <SoftwareCTA />
      <Form />
    </>
  );
}
