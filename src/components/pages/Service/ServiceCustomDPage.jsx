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
    title: "Custom Development",
    headline:
      "Architecting Your Future with Custom Application Development: Dream, Build, Scale",
  },
  featureSection: {
    partOne: {
      text: "In the dynamic landscape of today, your software must be as adaptive as your business itself. It's not just about having code that seamlessly integrates with legacy systems; you also need a team of seasoned experts, individuals with full-stack proficiency, to navigate your vision into the future",
    },
    partTwo: {
      text: "We are proud to be one of the renowned teams of specialized software engineers, architects, and developers. We excel in tackling intricate business challenges with innovative, unconventional, and practical solutions",
    },
    partThree: {
      text: "Our application transformation services grant you unparalleled access to leading-edge technologies through our extensive network of industry partners. We are at the forefront, pioneering innovations to deliver elegant, hassle-free software solutions at their finest. Our innovative approach to software and application development, coupled with a strategic business mindset, empowers you to reinvent your enterprise applications and, ultimately, transform your business",
    },
    partFour: {
      text: "In a typical scenario, many companies grapple with a mix of outdated legacy systems and contemporary digital and SaaS platforms. These often consume significant IT resources and constrain their ability to drive digital growth. IG recognizes this challenge and leverages emerging technologies, coupled with agility, to help you meet the pressing business demands of tomorrow, whether you're refreshing an existing application or embarking on something entirely new",
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


export default function ServiceCustomDPage() {
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
