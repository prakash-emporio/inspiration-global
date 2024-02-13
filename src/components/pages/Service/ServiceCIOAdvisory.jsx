import {
  ServicesHero,
  ServiceLeftText,
  ServiceRightText,
  ServiceBoldText,
  ServicesFeatureSection,
  ServiceSectionCard,
  ServiceFirstText,
  ServicePointText
} from "../../ServicesComponents/index.js";
import { SharedCard } from "../../Shared/index.js";
import { Form } from "../../home/index.js";
import { SoftwareCTA } from "../../SoftwareComponents/index.js";

const api = {
  id: "1267433412322112445",
  hero: {
    id: "557",
    img: "/industryhero.png",
    title: "CIO Advisory",
    headline:
      "Technology is pervasive, but Value is elusive in today's CIO roles",
  },
  featureSection: {
    partOne: {
      text: "In today's corporate landscape, technology has evolved into a critical driver of corporate strategy and success. The modern Chief Information Officer (CIO) is rapidly becoming the new corporate luminary—a catalyst for change, corporate transformation, and a practical advocate for the potential of emerging technologies. However, it's a stark reality that technology investments don't always yield the anticipated benefits, and companies are grappling with the formidable task of leveraging technology for innovation",
    },
    partTwo: {
      text: "As a result, organizations are in dire need of a fundamentally different approach to construct and oversee technology and large-scale transformations, one that aligns seamlessly with the ever-evolving business dynamics of today",
    },
    partThree: {
      text: "This is precisely where IG's Technology Strategy & Advisory practice steps in. We assist organizations in harnessing technology and innovation to shape their technology visions, execute digital transformation initiatives, and reinvent their businesses, ultimately extracting remarkable, sustainable value from their technology investments",
    },
    partFour: {
      text: "For numerous CIOs, this presents an opportunity to foster growth where genuine business value can be gained. Doing what is right may entail making tough decisions, but these choices lay the groundwork for future IT growth",
    },
    partFive: {
      text: "In today's competitive marketplace, high-performing IT is an unequivocal strategic imperative, with most companies relying on IT to bolster and facilitate their business growth agenda. The current market conditions have imposed a demanding set of challenges on IT, and CIOs are increasingly tasked with:",
      points: [
        "Achieving more with fewer resources, by delivering new or enhanced capabilities to the business with heightened efficiency",
        "Elevating IT quality, ensuring a more reliable service, early issue identification, and robust solutions tailored to diverse business requirements",
        "Enhancing customer satisfaction through improved responsiveness and service quality from IT",
        "Aligning IT initiatives with the overarching business strategy, thereby maximizing the value IT brings to the organization",
        "Adapting effectively to change drivers like market forces, regulatory mandates, cost reduction pressures, or restructuring due to mergers and acquisitions",
      ]
    },
    partSix: {
      text: "Our CIO Advisory Services practice offers end-to-end capabilities that encompass a spectrum of CIO challenges, from defining IT strategy and managing business/system architecture to measuring and optimizing IT value and performance",
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

export default function ServiceCIOAdvisory() {
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
      <ServicePointText text={api.featureSection.partFive.text} points={api.featureSection.partFive.points} />
      <ServiceRightText text={api.featureSection.partSix.text} />
      <ServiceSectionCard cards={api.servicesCards} />
      <ServicesFeatureSection />
      <SharedCard />
      <SoftwareCTA />
      <Form />
    </>
  )
}



