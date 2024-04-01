import { Form } from "../../components/home/index.js";
import { ServiceContent } from "../../components/ServicesComponents/index.js";
import { SharedCard, SharedCTA } from "../../components/Shared/index.js";
import SharedHero from "../../components/Shared/SharedHero.jsx";

const api = {
  id: "1267433412322112445",
  hero: {
    id: "557",
    img: "/CloudServicesHero.png",
    title: "Cloud Services",
    headline:
      "We work towards advancing the cloud Journey towards enhanced resilience",
  },
  contentSection: [
    {
      id: 1,
      text: "In response to recent disruptions, organizations have swiftly embraced cloud and digital transformation, bolstering their resilience. However, the next phase involves a reinvention aimed at achieving deeper integration within a cohesive cloud strategy. This transformation is essential to unlock delayed value and streamline costs",
    },
    {
      id: 2,
      text: "Today's forward-thinking organizations view the cloud as a pivotal enabler of business growth and exceptional experiences for both customers and employees. They recognize that it transcends mere migration; it is a pathway to fostering innovation, accelerating growth, and maintaining a competitive edge",
    },
    {
      id: 3,
      text: "Whether you're embarking on your cloud journey or planning a migration, the choice of the right partner can make all the difference between success and failure. IG's consultants and architects specialize in guiding companies through the intricacies of cloud platforms, enterprise architecture, integration, licensing, and toolsets. Among these facets, cost savings emerge as a crucial focal point, especially in times of economic uncertainty",
    },
    {
      id: 4,
      text: "Amid the promise of extensive cloud transformation and the complexities that must be addressed, such as rethinking operating models and talent acquisition, organizations find themselves at a crossroads. They've already reaped the low-hanging fruit of cloud adoption but must now redouble their efforts to fully realize its potential. How do we know this? Because those who consistently achieve positive outcomes are the avid adopters who view the cloud as an ever-evolving journey, not just a destination",
    },
  ],
};

export default function ServiceCloudServicePage() {
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
