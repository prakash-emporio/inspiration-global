import { useState } from "react";
import { Form } from "../../components/home/index.js";
import { SharedCard } from "../../components/Shared/index.js";
import {
  FeatureSection,
  SoftwareCTA,
  CardTypeOne,
  CardTypeTwo,
} from "../../components/SoftwareComponents/index.js";
import NewSoftwareHero from "../../components/SoftwareComponents/NewSoftwareHero.jsx";

const api = {
  img: "/SalesforceHero.png",
  header: {
    id: "23423",
    title: "Unlocking Salesforce Success: Your Journey Begins Here",
    subtitle:
      "Deep industry insights, proven customer solutions experience, and Salesforce know-how",
    logo: "/SoftwareSalesforce.svg",
  },
  featureSection: {
    id: "323423",
    title: "Enterprise Performance at",
    subtitle: "SCALE",
    content:
      "Are you fully leveraging every opportunity that comes your way? With our Salesforce platform and sales process expertise, you'll be well-equipped to do so. At Inspiration Digital, we help you forge stronger connections with your customers and hit your sales goals.",
  },
  cardSection: {
    1: {
      id: "1",
      img: "/softwareConsulting.png",
      title: "Consulting",
      content:
        "At IG, our Salesforce experts empower your team to focus on selling and enhancing the customer experience, rather than wasting time searching across a disjointed array of tools and repositories. Our goal is to assist you in harnessing Salesforce's top-notch CRM capabilities, automating tasks, streamlining processes, and optimizing your sales efforts, prospects, and ultimately your customer relationships. Through our expertise and customer-centric approach, in combination with Salesforce's robust platform, we enable you to create realistic sales forecasts, gain valuable insights into your sales pipeline, and effortlessly attain a 360-degree view of your customers.",
    },
    2: {
      id: "2",
      img: "/softwareLift.png",
      title: "Implementation and Integration",
      content:
        "With our comprehensive range of services, which includes strategy development, implementation, migration, automation, management, and training, our team ensures that you're making the most of the ideal Salesforce solution for your needs. We have proven proficiency and experience with various Salesforce tools, including Quick Starts, Marketing Cloud, Pardot, Salesforce CPQ, and Tableau.From transitioning from Classic to Lightning to adopting Einstein, we provide your team with the complete Customer 360 experience. Our approach brings consistency to your sales processes and offers enhanced oversight at all reporting and operational levels. The potential for your organization is limitless, and we are here to help you unlock it today, so you can embrace a brighter tomorrow",
    },
    3: {
      id: "3",
      img: "/softwareTalent.png",
      title: "Talent Sourcing",
      content:
        "When it comes to sourcing talent for Salesforce, we understand the unique challenges involved. With our specialized expertise and extensive experience, we forge a strategic partnership in talent acquisition, ensuring you have the right team members to drive your Salesforce projects to success. Beyond just identifying top-tier Salesforce talent, we also provide support in the onboarding process and ongoing assistance to seamlessly integrate these experts into your team. Don't let the complexities of Salesforce talent acquisition hinder your organization's progress. Reach out to us today and entrust us with the task of finding the skilled professionals essential for your Salesforce projects. This way, you can focus your energy on leading innovation and nurturing growth within your business.",
    },
  },
};

export default function SoftwareSalesforcePage() {
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
      <div
        className="hero-background-img software-hero-background-img"
        style={{ backgroundImage: `url(${api.img})` }}
      >
        <NewSoftwareHero
          title={api.header.title}
          text={api.header.subtitle}
          heroLogo={api.header.logo}
        />
      </div>
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
