import { Form } from "../../components/home/index.js";
import { ServiceContent } from "../../components/ServicesComponents/index.js";
import { SharedCard, SharedCTA } from "../../components/Shared/index.js";
import SharedHero from "../../components/Shared/SharedHero.jsx";

const api = {
  id: "1267433412322112445",
  hero: {
    id: "557",
    img: "/AIHero.png",
    title: "Artificial Intelligence",
    headline:
      "Unlocking your Potential with artificial intelligence and data is a must-have",
  },
  contentSection: [
    {
      id: 1,
      text: "When you harness the capabilities of analytics, automation, and artificial intelligence (AI), you gain the ability to unearth hidden relationships within vast datasets. By implementing a well-planned strategy and adopting the right technology, you can strike a harmonious balance between speed, cost efficiency, and data quality, ultimately delivering quantifiable business value",
    },
    {
      id: 2,
      text: "It's a fusion of humans with machines, strategy with insights, cost reduction with automation, data with a clear purpose, and speed with unwavering precision. The transformative power of 'with' has never been more significant, and IG is at the forefront, empowering companies to harness this force, identify game-changing advantages, and operate with swifter, more precise decision-making while forging valuable connections with their customers",
    },
    {
      id: 3,
      text: "We are here to guide you in leveraging the formidable capabilities and adaptability of AI, propelling your organization to new heights of excellence. From crafting a strategic framework for AI to innovating fresh business models and enhancing performance across your operational domains, we stand by your side throughout your journey to turn raw data into actionable insights",
    },
    {
      id: 4,
      text: "With our robust suite of assets and intellectual property, combined with Managed Analytics & AI services (featuring cloud-based Robotic Process Automation Software as a Service and Insights as a Service), we translate cognitive technology into real-world applications.",
    },
    {
      id: 5,
      text: "Collaborating closely with you, we engineer AI-driven products that position your business at the forefront of innovation. Our expertise extends to modernizing your analytics and data processes, leveraging cutting-edge cloud-enabled platforms and big data architectures to empower analytics and AI-driven transformations",
    },
    {
      id: 6,
      text: "Our team of robotic and intelligent automation specialists collaborates with you to implement automated processes that mimic human decision-making, interactions, and judgments. This approach uncovers novel opportunities that drive results at every tier of your business",
    },
    {
      id: 7,
      text: "In the end, we facilitate your journey to AI-driven insights and engagement through next-generation autonomous algorithms. These algorithms augment your human decision-making, generating actionable predictions and insights from your data while enabling a higher degree of autonomous decision-making",
    },
  ],
};

export default function ServiceAIPage() {
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
