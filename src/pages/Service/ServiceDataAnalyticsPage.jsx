import { ServiceContent } from "../../components/ServicesComponents/index.js";
import { SharedCard, SharedCTA } from "../../components/Shared/index.js";
import { Form } from "../../components/home/index.js";
import SharedHero from "../../components/Shared/SharedHero.jsx";

const api = {
  id: "1267433412322112445",
  hero: {
    id: "557",
    img: "/DataAnalyticsHero.png",
    title: "Data Analytics",
    headline:
      "The advent of data, analytics, and AI has unlocked a world of uncharted opportunities",
  },
  featureSection: {
    partOne: {
      text: "If your organization's data is fragmented or of subpar quality, it remains immobilized. It's time to reimagine your current processes, ensuring data is not only accessible at speed but also transparent and trustworthy. Only then can data truly amplify the potential of your technology and AI investments",
    },
    partTwo: {
      text: "IG’s analytics services and solutions serve as a catalyst for any organization striving for growth and a competitive edge. We identify practical use cases aligned with your business priorities and engineer customized analytics solutions, harnessing the right talent and technologies tailored to your specific needs. Your data's destiny holds the power to elevate performance, fortitude, and enduring growth for years to come",
    },
    partThree: {
      text: "While big data can be transformative, it often overwhelms businesses, leaving them drowning in a sea of information. Data is only as valuable as the actionable insights it offers; otherwise, it's just noise. We guide our clients in distilling valuable insights from the data clutter, providing tailored analytics and business intelligence solutions with real-world impact. IG helps answer the fundamental questions: where to begin, which tools and skillsets are essential, and where the impact will be most pronounced",
    },
    partFour: {
      text: "Our expert team addresses the spectrum of data, analytics, and BI at a scale that ensures competitiveness and relevance to your customers, both today and tomorrow. With proficiency spanning areas such as business, marketing, technology, customer behavior analysis, data warehousing, visualization, and governance, the IG team offers a comprehensive solution set for any data-related challenge.",
    },
  },
  contentSection: [
    {
      id: 1,
      text: "If your organization's data is fragmented or of subpar quality, it remains immobilized. It's time to reimagine your current processes, ensuring data is not only accessible at speed but also transparent and trustworthy. Only then can data truly amplify the potential of your technology and AI investments",
    },
    {
      id: 2,
      text: "IG’s analytics services and solutions serve as a catalyst for any organization striving for growth and a competitive edge. We identify practical use cases aligned with your business priorities and engineer customized analytics solutions, harnessing the right talent and technologies tailored to your specific needs. Your data's destiny holds the power to elevate performance, fortitude, and enduring growth for years to come",
    },
    {
      id: 3,
      text: "While big data can be transformative, it often overwhelms businesses, leaving them drowning in a sea of information. Data is only as valuable as the actionable insights it offers; otherwise, it's just noise. We guide our clients in distilling valuable insights from the data clutter, providing tailored analytics and business intelligence solutions with real-world impact. IG helps answer the fundamental questions: where to begin, which tools and skillsets are essential, and where the impact will be most pronounced",
    },
    {
      id: 4,
      text: "Our expert team addresses the spectrum of data, analytics, and BI at a scale that ensures competitiveness and relevance to your customers, both today and tomorrow. With proficiency spanning areas such as business, marketing, technology, customer behavior analysis, data warehousing, visualization, and governance, the IG team offers a comprehensive solution set for any data-related challenge.",
    },
  ],
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

export default function ServiceDataAnalyticsPage() {
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
      {/* <ServicesFeatureSection /> */}
      <SharedCard />
      <SharedCTA />
      <Form />
    </>
  );
}
