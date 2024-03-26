import { Form } from "../../components/home/index.js";
import { ServiceContent } from "../../components/ServicesComponents/index.js";
import { SharedCard, SharedCTA } from "../../components/Shared/index.js";
import SharedHero from "../../components/Shared/SharedHero.jsx";

const api = {
  id: "1267433412322112445",
  hero: {
    id: "557",
    img: "/PMOHero.png",
    title: "PMO",
    headline:
      "Comprehensive Project Management Office Services for today and tomorrow",
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
  contentSection: [
    {
      id: 1,
      text: "Our project management services and PMO support are grounded in general best practices, thoughtfully tailored to the unique demands of each project and its alignment with your operational procedures. In the realm of project management, every project is a distinctive venture that often involves pioneering new territory, introducing cutting-edge technologies, and fundamentally transforming your business processes—all concurrently",
    },
    {
      id: 2,
      text: " To navigate these intricate challenges effectively, it's imperative to establish a pragmatic project control framework, reinforced by a robust Project Management Office (PMO). The PMO plays a pivotal role in upholding adherence to the established framework and providing centralized governance and control",
    },
    {
      id: 3,
      text: "PMO Design and Implementation",
      points: [
        "We initiate a review of your existing PMO and the efficacy of the associated control framework",
        "We furnish practical recommendations for implementation, drawing upon our expertise",
      ],
    },
    {
      id: 4,
      text: "Whether you require PMO framework design from the project's inception or ongoing PMO support throughout the entire project lifecycle, we stand ready to assist you",
    },
    {
      id: 5,
      text: "Collaborative Project Management",
      points: [
        "Our engagement starts with an in-depth assessment of your current Project Management capabilities",
        "This early assessment empowers us to identify potential issues that could jeopardize the project's success and offer actionable recommendations for mitigation",
      ],
    },
    {
      id: 6,
      text: "We work together to set the stage for your project's success by helping you establish the PMO with effective monitoring and control processes. This encompasses defining project goals, objectives, and selecting the right delivery and governance models",
    },
    {
      id: 7,
      text: "Ensuring Successful Delivery and Mitigating Risks",
      points: [
        "We provide dedicated specialists to manage your PMO or collaborate with your team to bolster key disciplines, spanning planning, budgeting, change control, and stakeholder management",
        "Our expertise extends to advising on risk management, including designing efficient risk and issue logs, implementing risk-management processes, and forming a risk committee",
      ],
    },
    {
      id: 8,
      text: "Additionally, we offer a retrospective review of past projects and programs to glean insights into your organization's strengths and weaknesses, which can significantly impact the outcome of future endeavors",
    },
    {
      id: 9,
      text: "End-to-End Waterfall and Agile Program Management",
      points: [
        "We guide our clients through the complete lifecycle of their projects, from the project definition phase to project termination and post-project support",
        "Our approach entails assisting clients in selecting the most suitable methodology and approach that aligns with their organization's unique needs and the specifics of the project",
        "As part of our PMO support, we vigilantly manage both internal and external risks associated with project or program implementation, mitigating potential issues related to project scope, budget, timing, and quality",
      ],
    },
  ],
};

export default function ServicePMOPage() {
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
