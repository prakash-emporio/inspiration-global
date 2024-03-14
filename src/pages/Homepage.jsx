import NewBlogSharedCard from "../components/Shared/NewBlogSharedCard.jsx";
import { SharedCard } from "../components/Shared/index.js";
import NewHero from "../components/home/NewHero.jsx";
import {
  Hero,
  CompanySection,
  StatsSection,
  TalentCard,
  ImpactCard,
  VideoCard,
  BlogCaseStudyCard,
  ServiceCard,
  CTA,
  Form,
} from "../components/home/index.js";

const homepage = {
  id: "1267433412445",
  hero: {
    id: "hero_557",
    img: "/heroImage.png",
    title: "We Live",
    main: "at the intersection of technology, talent & tomorrow",
    ending: "...",
    buttonText: "LET’S GO",
  },
  companySection: [
    { id: "company_1", img: "" },
    { id: "company_2", img: "" },
    { id: "company_3", img: "" },
    { id: "company_4", img: "" },
    { id: "company_5", img: "" },
    { id: "company_6", img: "" },
    { id: "company_7", img: "" },
    { id: "company_8", img: "" },
  ],
  statsSection: {
    id: "stats_221",
    title: "What We Do",
    description:
      "Inspiration Global is a premier talent and engineering company that offers comprehensive technology partnership services, spanning consulting, talent, solution development, and end-to-end implementation",
    statsData: [
      { index: 0, value: 24, label: "Years in Business" },
      { index: 1, value: 650, label: "Successful Projects", sup: true },
      { index: 2, value: 15, label: "Countries Served" },
    ],
  },
  impactCardData: {
    id: "impact_22",
    title: "Product Engineering with Impact",
    description:
      "Transform innovative ideas into solutions that revolutionize industries and enrich lives. \n Our public sector approach combines the power of human creativity, strategy, advanced technology, and a culture that prioritizes timely and effective implementation. Through this approach, we enable leaders in public sector organizations to transform their ambitions into tangible results. \n By leveraging existing resources and expertise to their fullest potential, we assist in establishing the groundwork for meaningful progress that generates long-term benefits for citizens and strengthens the capacity of government.",
    buttonText: "Dive In",
    image: "/content1.jpg",
  },
  talentCardData: {
    id: "talent_323",
    title: "Talent Without the Hassle",
    description:
      "Seamless sourcing done right the first time. \n Great talent is the equalizer and when combined with sound strategy, technology and data, they are revolutionizing every aspect of business, including competition, value definition, delivery, and transformation to achieve optimal outcomes.\n These advances have become more critical than ever, given the unprecedented uncertainty and volatility in today's business landscape. To navigate todays challenges successfully, businesses across all industries must embrace new levels of innovation and undergo digital & talent transformation.",
    buttonText: "Learn More",
    image: "/content2.jpg",
  },
  videoCardData: {
    id: "video_1",
    videoTitle: "PE/VC Value Creation with Measureable Results.",
    videoLink: "/video.mp4",
    cardTitle: "Meet Team Member",
    cardImage: "/content6.png",
    cardDescription: "Sushant Pednekar",
    cardButtonText: "Meet",
  },
  services: [
    {
      id: "service_1",
      title: "Product Engineering",
      link: "services/product-engineering",
      description:
        "At our core, we specialize in comprehensive product engineering services",
    },
    {
      id: "service_2",
      title: "Custom Development",
      link: "services/custom-development",
      description:
        "In the dynamic landscape of today, your software must be as adaptive as your business itself",
    },
    {
      id: "service_3",
      title: "Cloud Services",
      link: "services/cloud-services",
      description:
        "Today's forward-thinking organizations view the cloud as a pivotal enabler of business growth",
    },
    {
      id: "service_4",
      title: "Data and Analytics",
      link: "services/data-and-analytics",
      description:
        "Our analytics services and solutions serve as a catalyst for any organization striving for growth",
    },
    {
      id: "service_5",
      title: "Artificial Intelligence",
      link: "services/artificial-intelligence",
      description:
        "We are here to guide you in leveraging the formidable capabilities and adaptability of AI",
    },
    {
      id: "service_6",
      title: "CIO Advisory",
      link: "services/cio-advisory",
      description:
        "We assist organizations in harnessing technology and innovation to shape their technology vision",
    },
    {
      id: "service_7",
      title: "PMO",
      link: "services/pmo",
      description:
        "Our pragmatic project control framework is reinforced by a robust Project Management Office",
    },
    {
      id: "service_8",
      title: "Security",
      link: "services/security",
      description:
        "Our extensive cybersecurity expertise, coupled with our industry knowledge, empowers us to innovate cybersecurity solutions",
    },
  ],
  ctaSection: {
    id: "cta_1",
    title: "Powering Enterprises",
    description:
      "For a lot of companies, managing complex application landscapes that include a mix of legacy systems, digital technologies, and SaaS solutions can be a daunting task. Such landscapes can consume a significant amount of IT resources, hampering the company's potential for growth Our application services offer an effective solution to this challenge, enabling you to streamline and optimize your application landscape with speed and efficiency. We prioritize agility and adaptability, and continuously introduce innovative solutions to ensure that your business gains the most value from the capabilities we provide.",
  },
};

export default function Homepage() {
  return (
    <>
      <div
        id="hero-home-img"
        className="img-fluid"
        style={{ backgroundImage: `url(${homepage.hero.img})` }}
      >
        <NewHero
          heroTitle={homepage.hero.title}
          heroTitleMain={homepage.hero.main}
          heroTitleEnding={homepage.hero.ending}
          heroButtonText={homepage.hero.buttonText}
        />
      </div>
      <CompanySection />
      <StatsSection
        key={homepage.statsSection.id}
        title={homepage.statsSection.title}
        description={homepage.statsSection.description}
        statsData={homepage.statsSection.statsData}
      />
      <ImpactCard
        key={homepage.impactCardData.id}
        title={homepage.impactCardData.title}
        description={homepage.impactCardData.description}
        buttonText={homepage.impactCardData.buttonText}
        image={homepage.impactCardData.image}
      />
      <TalentCard
        key={homepage.talentCardData.id}
        title={homepage.talentCardData.title}
        description={homepage.talentCardData.description}
        buttonText={homepage.talentCardData.buttonText}
        image={homepage.talentCardData.image}
      />
      <SharedCard />
      <VideoCard
        key={homepage.videoCardData.id}
        videoTitle={homepage.videoCardData.videoTitle}
        videoLink={homepage.videoCardData.videoLink}
        cardTitle={homepage.videoCardData.cardTitle}
        cardImage={homepage.videoCardData.cardImage}
        cardDescription={homepage.videoCardData.cardDescription}
        cardButtonText={homepage.videoCardData.cardButtonText}
      />
      <BlogCaseStudyCard />
      <ServiceCard key={homepage.services.id} services={homepage.services} />
      <CTA
        key={homepage.ctaSection.id}
        title={homepage.ctaSection.title}
        description={homepage.ctaSection.description}
      />
      <Form />
    </>
  );
}
