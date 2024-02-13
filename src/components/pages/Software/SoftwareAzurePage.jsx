import { useState } from "react";
import { Form } from "../../home/index.js";
import { SharedCard } from "../../Shared/index.js";
import {
  FeatureSection,
  SoftwareCTA,
  SoftwareHero,
  CardTypeOne,
  CardTypeTwo,
} from "../../SoftwareComponents/index.js";

const api = {
  img: "/AzureHero.png",
  header: {
    id: "355",
    title: "Chart Your Cloud Odyssey with IG's Azure Expertise",
    subtitle:
      " From On-Premises to Cloud Edge, We're Your Masterful Cloud Navigators",
    logo: "/SoftwareAzure.svg",
  },
  featureSection: {
    id: "345",
    title: "Enterprise Performance at",
    subtitle: "SCALE",
    content:
      " We offer a business-focused, application-driven strategy that empowers us to deliver agile, hybrid Azure cloud solutions. This provides you with the portability and visibility necessary to manage workloads seamlessly and securely across core, cloud, and edge environments.",
  },
  cardSection: {
    1: {
      id: "1",
      img: "/softwareConsulting.png",
      title: "Consluting",
      content:
        "Azure's ever-evolving product portfolio is constantly pushing the boundaries and pioneering new frontiers for businesses. We're here to guide you on the same path. With Azure and Inspiration Digital, the future of cloud technology is at your doorstep. Our team specializes in crafting tailored Azure solutions that redefine your organization's capabilities, competitiveness, and overall performance. We drive cost reductions, mitigate risks, and enhance resource allocation, security, collaboration, scalability, and agility. In essence, we contribute to the improvement of your bottom line. Drawing upon our profound expertise and Azure's extensive range of services, we will modernize and enhance your enterprise architecture, infrastructure, business operations, and the experiences of both your customers and employees.",
    },
    2: {
      id: "2",
      img: "/softwareLift.png",
      title: "Azure Migration",
      content:
        "Experience the Confidence of a Well-Defined Path and Rapid Advancement Through Our Migration and Modernization Journey. This meticulously designed process is tailored to expedite your transformation while minimizing risk, earning trust from clients worldwide!Irrespective of your current position on your cloud adoption journey, we're here to empower you to achieve the utmost from your cloud investments. IG's Microsoft Azure Data Migration & Modernization initiative leverages the strength of Microsoft's cloud solutions in collaboration with IG's delivery prowess, guiding you comprehensively from the initial stages of cloud strategy and migration planning to the execution of migration, data modernization, and the necessary adjustments in your business operations.Our goal is to make your transition to the cloud as seamless, efficient, and beneficial as possible. With our strategic partnership, you can expect predictable steps and swift progress, ensuring your journey to the cloud is a resounding success.",
    },
    3: {
      id: "3",
      img: "/softwareTalent.png",
      title: "Talent Sourcing",
      content:
        "We understand the unique challenges associated with recruiting Azure professionals. Drawing upon our specialized expertise and extensive experience, we foster a strategic partnership in talent acquisition, ensuring that you have the right individuals to steer your Azure projects toward success. Our commitment extends beyond identifying top-tier Azure talent; we also provide comprehensive support during the onboarding process and ongoing assistance to seamlessly integrate these experts into your team.",
    },
  },
};

export default function SoftwareAzurePage() {
  const [isLoading, setIsLoading] = useState();
  const [isError, setIsError] = useState();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: </div>;
  }

  return (
    <>
      <SoftwareHero
        key={api.header.id}
        heroImage={api.img}
        heroheader={api.header.title}
        heroSubheader={api.header.subtitle}
        heroLogo={api.header.logo}
      />
      <FeatureSection
        key={api.featureSection.id}
        title={api.featureSection.title}
        subtitle={api.featureSection.subtitle}
        text={api.featureSection.content}
      />
      <CardTypeOne
        key={api.cardSection.id}
        image={api.cardSection[1].img}
        title={api.cardSection[1].title}
        content={api.cardSection[1].content}
      />
      <CardTypeTwo
        key={api.cardSection.id}
        image={api.cardSection[2].img}
        title={api.cardSection[2].title}
        content={api.cardSection[2].content}
      />
      <CardTypeOne
        key={api.cardSection.id}
        image={api.cardSection[3].img}
        title={api.cardSection[3].title}
        content={api.cardSection[3].content}
      />
      <SharedCard />
      <SoftwareCTA />
      <Form />
    </>
  );
}
