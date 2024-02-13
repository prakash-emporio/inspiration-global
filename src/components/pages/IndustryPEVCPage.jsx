import {
  IndustryHero,
  IndustryFeatureCardLeftText,
  IndustryFeatureCardRightText,
  IndustryFeatureCardImage,
  IndustryEngagementModel,
  IndustryFeatureFirstCard,
} from "../IndustryComponents";
import { Form } from "../home/index.js";
import { SharedCard } from "../Shared/index.js";
import { SoftwareCTA } from "../SoftwareComponents/index.js";

const api = {
  id: "1267434352342",
  hero: {
    id: "234",
    img: "/industryhero.png",
    title: "PE / VC",
    headline:
      "Faced with limited resources, tight deadlines, and a persistent state of crisis, leaders in the public service sector must carefully balance stability and speed in response to ever-changing needs.",
  },
  featureSection: {
    img: "/industrytestimonial.png",
    partOne: {
      text: "Is your private equity or venture capital firm equipped with an execution arm dedicated to fostering value creation within your portfolio companies? Whether your investments encompass startups or rapidly growing enterprises, we specialize in bridging the gap between the current status of the companies you support and your aspirations for their future. These companies often require comprehensive business, customer experience, and technology consulting, and we provide these through various services, including technology assessments, product development capabilities, product-market fit evaluations, go-to-market strategies, branding and storytelling, data analytics, business intelligence, and more",
    },
    partTwo: {
      text: "Our approach involves seamless collaboration between our strategy, experience, and technology teams and our business consulting group, ensuring the development of high-impact work and products for our client partners and their respective portfolio companies",
    },
    partThree: {
      text: "At the core of our methodology lies an outside-in perspective, driven by the voice of the customer. Merging our teams with the investor and portfolio company (PortCo) brings together all the essential capabilities required for the success of these businesses in the market as well as the return for the investors",
    },
    partFour: {
      text: "As a digital consultancy, technology is our expertise, but we approach it with a people-first perspective, with a strong emphasis on delivering value-creation and measurable results. Our business, customer experience, and technology teams possess extensive experience in developing high-impact, accelerated solutions across a broad spectrum of industries",
    },
    partFive: {
      text: "At Inspiration Digital, our mission is to transform the businesses you invest in through a blend of business and digital strategies, ensuring their sustainability and optimizing your returns both today and in the future",
    },
  },
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
    <IndustryHero
      key={api.hero.id}
      heroImage={api.hero.img}
      heroTitle={api.hero.title}
      heroHeadline={api.hero.headline}
    />
    <IndustryFeatureFirstCard text={api.featureSection.partOne.text} />
    <IndustryFeatureCardRightText text={api.featureSection.partTwo.text} />
    <IndustryFeatureCardImage featureImage={api.featureSection.img} />
    <IndustryFeatureCardLeftText text={api.featureSection.partThree.text} />
    <IndustryFeatureCardRightText text={api.featureSection.partFour.text} />
    <IndustryFeatureCardLeftText text={api.featureSection.partFive.text} />
    <div className="container-fluid talent-card-section-wrapper pb-5">
      <h1 className="talent-feature-section-header py-5">
        A Few of Our Capabilities
      </h1>
      <div className="row p-lg-5">
        {api.engagementModels.map((model, index) => (
          <IndustryEngagementModel
            key={index}
            title={model.title}
            description={model.description}
          />
        ))}
      </div>
    </div>
    <SharedCard />
    <SoftwareCTA />
    <Form />
  </>
  )
}
