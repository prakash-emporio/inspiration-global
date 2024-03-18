import {
  ServiceContent,
  ServicesFeatureSection,
} from "../../components/ServicesComponents/index.js";
import { SharedCard } from "../../components/Shared/index.js";
import { Form } from "../../components/home/index.js";
import { SoftwareCTA } from "../../components/SoftwareComponents/index.js";
import SharedHero from "../../components/Shared/SharedHero.jsx";

const api = {
  id: "126743341233122112445",
  hero: {
    id: "557",
    img: "/SecurityHero.png",
    title: "Security",
    headline:
      "Our extensive cybersecurity expertise, coupled with our profound industry knowledge, empowers us to innovate next-generation cybersecurity solutions",
  },
  contentSection: [
    {
      id: 1,
      text: "As the proliferation of cloud enablement, data centers and Internet-enabled devices continues, the realm of cyber culture is expanding at a faster pace than cyber security. Everything reliant on cyberspace faces potential risks, including private data, intellectual property, cyber infrastructure, and even military and national security. These risks can emerge from deliberate attacks, inadvertent security lapses, and vulnerabilities in the relatively immature, unregulated global Internet",
    },
    {
      id: 2,
      text: "At IG, we collaborate closely with our member firm clients to help organizations develop and implement an integrated cyber strategy. This approach leverages the capabilities of information networks to enhance business operations, improve mission performance, and enhance customer support, all while maintaining the highest standards of security and privacy",
    },
    {
      id: 3,
      text: "Most reports on cyber security consistently highlight a common theme: despite increased attention and substantial investments in security, the number of cyber incidents and their associated costs continue to rise. They often attribute this to the growing sophistication of hackers and adversaries, posing a particularly challenging problem. Some even question the feasibility of achieving complete security in today's ever-evolving landscape of cyber threats",
    },
    {
      id: 4,
      text: "However, crucial questions remain unanswered. Specifically, what underlies this trend, and how can organizations reverse it to gain the upper hand in the battle against cyber risk?",
    },
    {
      id: 5,
      text: "Amid these questions and uncertainties, one thing is evident: existing approaches to managing cyber risk, often centered on perimeter security, fall short. The good news is that there are tangible, pragmatic steps that leaders can take to shift the paradigm when it comes to cyber risk. By implementing these measures, organizations can bolster their security, vigilance, and resilience",
    },
    {
      id: 6,
      text: "We welcome the opportunity to discuss these options with you",
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

export default function ServiceSecurityPage() {
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
      <SoftwareCTA />
      <Form />
    </>
  );
}
