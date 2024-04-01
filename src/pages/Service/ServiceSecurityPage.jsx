import { Form } from "../../components/home/index.js";
import { ServiceContent } from "../../components/ServicesComponents/index.js";
import { SharedCard, SharedCTA } from "../../components/Shared/index.js";
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
      <SharedCTA />
      <Form />
    </>
  );
}
