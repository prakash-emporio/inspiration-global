import {
  IndustryContent,
  IndustryEngagementModel,
} from "../../components/IndustryComponents/index.js";
import { Form } from "../../components/home/index.js";
import { SharedCard, SharedCTA } from "../../components/Shared/index.js";
import SharedHero from "../../components/Shared/SharedHero.jsx";

const api = {
  id: "1267434352342",
  hero: {
    id: "234",
    img: "/PEVCHero.png",
    title: "PE / VC",
    headline:
      "Faced with limited resources, tight deadlines, and a persistent state of crisis, leaders in the public service sector must carefully balance stability and speed in response to ever-changing needs.",
    bodyImg: "/PEVCBody.png",
  },
  contentSection: [
    {
      id: 1,
      text: "Is your private equity or venture capital firm equipped with an execution arm dedicated to fostering value creation within your portfolio companies? Whether your investments encompass startups or rapidly growing enterprises, we specialize in bridging the gap between the current status of the companies you support and your aspirations for their future.",
    },
    {
      id: 2,
      text: "These companies often require comprehensive business, customer experience, and technology consulting, and we provide these through various services, including technology assessments, product development capabilities, product-market fit evaluations, go-to-market strategies, branding and storytelling, data analytics, business intelligence, and more",
    },
    {
      id: 3,
      text: "Our approach involves seamless collaboration between our strategy, experience, and technology teams and our business consulting group, ensuring the development of high-impact work and products for our client partners and their respective portfolio companies",
    },
    {
      id: 4,
      text: "At the core of our methodology lies an outside-in perspective, driven by the voice of the customer. Merging our teams with the investor and portfolio company (PortCo) brings together all the essential capabilities required for the success of these businesses in the market as well as the return for the investors",
    },
    {
      id: 5,
      text: "As a digital consultancy, technology is our expertise, but we approach it with a people-first perspective, with a strong emphasis on delivering value-creation and measurable results. Our business, customer experience, and technology teams possess extensive experience in developing high-impact, accelerated solutions across a broad spectrum of industries",
    },
    {
      id: 6,
      text: "At Inspiration Digital, our mission is to transform the businesses you invest in through a blend of business and digital strategies, ensuring their sustainability and optimizing your returns both today and in the future",
    },
  ],
  engagementModels: [
    {
      title: "Talent & Recruitment",
      description:
        "We offer strategic consulting services that bring clarity to your talent and recruitment efforts, facilitating accelerated growth and shaping the future of your business today.",
    },
    {
      title: "Technology & Engineering",
      description:
        "Our expertise drives growth through the assessment, enhancement, and innovation of your organization's technology utilization, fostering continuous improvement.",
    },
    {
      title: "Enterprise Platforms",
      description:
        "We amplify the value of your investments in enterprise platforms through precise implementation, customization, and optimization tailored to your specific needs.",
    },
    {
      title: "Azure Platform",
      description:
        "Elevate your infrastructure to new levels of efficiency and business success with our consultancy, migration, optimization, and tailored solutions spanning the complete Azure platform.",
    },
  ],
};

export default function IndustryPEVCPage() {
  return (
    <>
      <div
        className="hero-background-img"
        style={{ backgroundImage: `url(${api.hero.img})` }}
      >
        <SharedHero title={api.hero.title} text={api.hero.headline} />
      </div>
      {api.contentSection.map((item) => (
        <IndustryContent
          key={item.id}
          index={item.id}
          text={item.text}
          bodyImg={api.hero.bodyImg}
        />
      ))}
      <div className="talent-card-section-wrapper pb-5">
        <div className="container">
          <h1 className="talent-feature-section-header py-5">
            A Few of Our Capabilities
          </h1>
          <div className="row py-md-5">
            {api.engagementModels.map((model, index) => (
              <IndustryEngagementModel
                key={index}
                title={model.title}
                description={model.description}
              />
            ))}
          </div>
        </div>
      </div>
      <SharedCard />
      <SharedCTA />
      <Form />
    </>
  );
}
