import { Form } from "../../components/home/index.js";
import {
  ServiceContent,
  ServiceSectionCard,
  ServicesFeatureSection,
} from "../../components/ServicesComponents/index.js";
import { SharedCard, SharedCTA } from "../../components/Shared/index.js";
import SharedHero from "../../components/Shared/SharedHero.jsx";

const api = {
  id: "1267433412322112445",
  hero: {
    id: "557",
    img: "/CustomDevelopmentHero.png",
    title: "Custom Development",
    headline:
      "Architecting Your Future with Custom Application Development: Dream, Build, Scale",
  },
  contentSection: [
    {
      id: 1,
      text: "In the dynamic landscape of today, your software must be as adaptive as your business itself. It's not just about having code that seamlessly integrates with legacy systems; you also need a team of seasoned experts, individuals with full-stack proficiency, to navigate your vision into the future",
    },
    {
      id: 2,
      text: "We are proud to be one of the renowned teams of specialized software engineers, architects, and developers. We excel in tackling intricate business challenges with innovative, unconventional, and practical solutions",
    },
    {
      id: 3,
      text: "Our application transformation services grant you unparalleled access to leading-edge technologies through our extensive network of industry partners. We are at the forefront, pioneering innovations to deliver elegant, hassle-free software solutions at their finest. Our innovative approach to software and application development, coupled with a strategic business mindset, empowers you to reinvent your enterprise applications and, ultimately, transform your business",
    },
    {
      id: 4,
      text: "In a typical scenario, many companies grapple with a mix of outdated legacy systems and contemporary digital and SaaS platforms. These often consume significant IT resources and constrain their ability to drive digital growth. IG recognizes this challenge and leverages emerging technologies, coupled with agility, to help you meet the pressing business demands of tomorrow, whether you're refreshing an existing application or embarking on something entirely new",
    },
  ],
  servicesCards: [
    {
      idx: 1,
      title: "Conceive & Develop",
      description:
        "From idea to prototype to engineering applications for tomorrows business, today – we deliver extraordinary value",
    },
    {
      idx: 2,
      title: "Modernize & Enhance",
      description:
        "Update applications and data sets to make them more useful, productive, and attractive to those who use them",
    },
    {
      idx: 3,
      title: "UX Design",
      description:
        "We leverage human centered design practices that engages users and elevates your products and applications",
    },
    {
      idx: 4,
      title: "Rapid Development",
      description:
        "With our breadth of experience in Low-Code platforms we can quickly develop a POC or App",
    },
    {
      idx: 5,
      title: "Lift and Shift",
      description:
        "With our proven cloud acceleration approach, you can move your applications and workloads to the cloud quickly",
    },
    {
      idx: 6,
      title: "Cloud Development",
      description:
        "Leverage a cloud first approach to developing applications with a flexible and scalable architecture",
    },
    {
      idx: 7,
      title: "Product Testing",
      description:
        "ID testing services can help you expedite time to market, increase quality, and reduce risk & costs",
    },
    {
      idx: 8,
      title: "Managed Services",
      description:
        "We can help you stabilize, optimize and manage your IT infrastructure with a 99.7% guaranteed SLA",
    },
  ],
};

export default function ServiceCustomDevlopmentPage() {
  return (
    <>
      <div
        className="hero-background-img"
        style={{ backgroundImage: `url(${api.hero.img})` }}
      >
        <SharedHero title={api.hero.title} text={api.hero.headline} />
      </div>
      <div className="container">
        {api.contentSection.map((item) => (
          <ServiceContent
            key={item.id}
            index={item.id}
            text={item.text}
            points={item.points}
          />
        ))}
      </div>
      <ServiceSectionCard
        cards={api.servicesCards}
        heading="Custom Development Services"
      />
      <ServicesFeatureSection />
      <SharedCard />
      <SharedCTA />
      <Form />
    </>
  );
}
