import {
  IndustryContent,
  IndustryEngagementModel,
} from "../../components/IndustryComponents/index.js";
import { Form } from "../../components/home/index.js";
import { SharedCard, SharedCTA } from "../../components/Shared/index.js";
import SharedHero from "../../components/Shared/SharedHero.jsx";

const api = {
  id: "12674345",
  hero: {
    id: "557",
    img: "/industryhero.png",
    title: "Public Sector",
    headline:
      "Faced with limited resources, tight deadlines, and a persistent state of crisis, leaders in the public service sector must carefully balance stability and speed in response to ever-changing needs.",
    bodyImg: "/PublicSectorBody.png",
  },
  contentSection: [
    {
      id: 1,
      text: "However, there is often little time for reflection and consideration of what might be achievable in exploring how their organizations could excel if they reimagined their operations and embraced innovative possibilities.",
    },
    {
      id: 2,
      text: "Even in the face of these challenges, public service agencies have a unique opportunity to cultivate resilience and foster ongoing evolution. By adopting intentional strategies that facilitate a continuous cycle of change and visionary thinking. This involves a dedicated focus on areas such as talent transformation, dismantling organizational silos to encourage collaboration, and championing initiatives that promote agility. These efforts empower our public service clients to lead with impact and continuously adapt to deliver more positive outcomes to the people they serve.",
    },
    {
      id: 3,
      text: "Our expertise is dedicated to evolving your organization, making it more productive and efficient. We not only develop and implement future-proof systems, processes, and technology solutions that are scalable and adaptable but also optimize existing legacy systems to maximize their longevity and efficiency.",
    },
    {
      id: 4,
      text: "In today's digital and mobile-centric world, governments and public sector organizations must operate in an 'Always On' mode. People increasingly expect to interact with citizen services on their own terms, and they demand digital technology as the means to enable these interactions. This involves delivering information through the preferred channels selected by citizens, embodying a digital-first mindset that empowers agencies and departments to serve their staff and citizens whenever, wherever, and however they desire.",
    },
    {
      id: 5,
      text: "Enhancing employee engagement and streamlining business processes while delivering exceptional service must be the foremost priorities. Success hinges on embracing the latest innovations in digital technology, data management, artificial intelligence and machine learning, cloud computing, mobile solutions, and social engagement. A fresh perspective and a new way of executing in today's dynamic environment are essential for achieving these goals.",
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

export default function IndustryPublicSectorPage() {
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
          <div className="row g-0 py-md-5">
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
