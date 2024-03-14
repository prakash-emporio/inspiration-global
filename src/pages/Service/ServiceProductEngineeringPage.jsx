import {
  ServiceContent,
  ServicesFeatureSection,
  ServiceSectionCard,
} from "../../components/ServicesComponents/index.js";
import { SharedCard } from "../../components/Shared/index.js";
import { Form } from "../../components/home/index.js";
import { SoftwareCTA } from "../../components/SoftwareComponents/index.js";
import SharedHero from "../../components/Shared/SharedHero.jsx";

const api = {
  id: "1267433412445",
  hero: {
    id: "557",
    img: "/serviceHero.png",
    title: "Product Engineering",
    headline:
      "We provide comprehensive product and platform engineering services that address the full technology stack.",
  },
  contentSection: [
    {
      id: 1,
      text: "In business, having a good - or even a great idea for a product can only take you so far. Without the proper management, methodology and attention, ideas can quickly die on the vine as pressure from internal stakeholders, competitors and changing market conditions outpace an organization’s ability to grow, innovate and adapt",
    },
    {
      id: 2,
      text: "At our core, we specialize in comprehensive product and platform engineering services that encompass the entire technology stack, spanning the entire product lifecycle",
    },
    {
      id: 3,
      text: "Our focus is on accelerating time to market, reducing costs, boosting revenue, and elevating service levels. Our community of innovators brings a rich history of collaboration, diversity, and curiosity to deliver human-centric, tech-driven solutions tailored to your unique business requirements",
    },
    {
      id: 4,
      text: "The digital era has reshaped the way businesses interact with their customers, from promoting products and services to delivering exceptional customer experiences and responsive support. To thrive today, businesses need to not just 'do' digital; they must 'be' digital inside and out. The common thread linking companies and customers is the pursuit of creating meaningful, enduring connections. Our seasoned strategists, with decades of experience in B2B, B2C, and B2B2C, embrace a customer-centric approach, immersing themselves in your customers' lives to understand their motivations, emotions, and needs. Armed with the right insights, skills, and technology, we craft your narrative and engineer measurable experiences that seamlessly connect you with users across the entire ecosystem.",
    },
    {
      id: 5,
      text: "Our community of solvers has a long history of working with organizations in bringing diverse perspectives, curiosity, and ingenuity to deliver human-centered, technology powered solutions and products made for your specific business needs.",
      points: [
        "ID leverages business, experience and engineering to help companies accelerate and transform products, platforms and the organization",
        "We work from strategy to execution",
        "Stellar track record of successful delivery",
        "Flat organizational structure with everyone invested in our client's success",
        "Numerous accelerators, IP and frameworks to improve costs and time-to-market",
      ],
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

export default function ServiceProductEngineeringPage() {
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
      <ServiceSectionCard cards={api.servicesCards} />
      <ServicesFeatureSection />
      <SharedCard />
      <SoftwareCTA />
      <Form />
    </>
  );
}
