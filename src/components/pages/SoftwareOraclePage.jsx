import { useState } from "react";
import { Form } from "../home/index.js";
import { SharedCard } from "../Shared/index.js";
import {
  FeatureSection,
  SoftwareCTA,
  SoftwareHero,
  CardTypeOne,
  CardTypeTwo
} from "../SoftwareComponents/index.js";

const api = {
  img: "/OracleHero.png",
  header: {
    id : "76",
    title: "You + IG + Oracle is a winning combination",
    subtitle:
      "IG is your trusted partner, providing the invaluable experience and expertise your team requires to optimize your Oracle investment",
    logo: "/SoftwareOracle.svg",
  },
  featureSection: {
    id: "88",
    title: "Enterprise Performance at",
    subtitle: "SCALE",
    content:
      "Unlock the Full Potential of Your Oracle Solution from Day One. One of the most common hurdles organizations face when embarking on Oracle Cloud or On-Premises solution implementations is the absence of a clear roadmap for maximizing the technology",
  },
  cardSection: {
    1: {
      id: "1",
      img: "/softwareConsulting.png",
      title: "Consluting",
      content:
        "IG’s Oracle Consulting is your gateway to unlocking the true potential of Oracle technologies for your business. Our team of experts specializes in Oracle solutions, offering strategic guidance, implementation support, and ongoing optimization to ensure you make the most of Oracle's powerful tools and platforms. Whether you're considering an Oracle Cloud migration, need assistance with database management, or seek to enhance your Oracle-based applications, our consulting services are tailored to your unique needs, enabling you to drive efficiency, innovation, and growth within your organization.",
    },
    2: {
      id: "2",
      img: "/softwareLift.png",
      title: "Managed Services",
      content:
        "Oracle implementations, whether they reside On-Premises or in the Cloud, present ongoing challenges related to maintenance, support, and security. Numerous organizations find themselves facing resource constraints within their internal teams, making it difficult to comprehensively support their entire Oracle technology stack. Additionally, they often prefer directing their internal IT staff's efforts towards business-critical initiatives that drive growth, rather than having them immersed in the intricacies of Oracle support and maintenance. As seasoned experts in Oracle Cloud, IaaS, and PaaS, IG's consultants possess an in-depth understanding of Oracle technologies. We stand ready to safeguard your business-critical Oracle enterprise applications, ensuring they remain secure and optimally operational within the appropriate environment.",
    },
    3: {
      id: "3",
      img: "/softwareTalent.png",
      title: "Talent Sourcing",
      content:
        "We recognize the distinctive challenges linked to the recruitment of Oracle professionals. Leveraging our specialized expertise and experience, we establish a strategic partnership in talent acquisition, guaranteeing that you have the right personnel to drive your Oracle projects to success. Beyond identifying top-tier Oracle talent, we also offer support in the onboarding process and continuous assistance to seamlessly integrate these experts into your team. Don't allow the intricacies of Oracle talent acquisition to impede your organization's progress. Reach out to us today and entrust us with the responsibility of locating the skilled professionals essential for your Oracle projects. This way, you can devote your energy to spearheading innovation and fostering growth within your business.",
    },
  },
};

export default function SoftwareOraclePage() {
  const [isLoading, setIsLoading] = useState();
  const [isError, setIsError] = useState();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: </div>;
  }

  return (
    <>
      <SoftwareHero
        key={api.header.id}
        heroImage={api.img}
        heroheader={api.header.title}
        heroSubheader={api.header.subtitle}
        heroLogo={api.header.logo}
      />
      <FeatureSection
        key={api.featureSection.id}
        title={api.featureSection.title}
        subtitle={api.featureSection.subtitle}
        text={api.featureSection.content}
      />
      <CardTypeOne
        key={api.cardSection.id}
        image={api.cardSection[1].img}
        title={api.cardSection[1].title}
        content={api.cardSection[1].content}
      />
      <CardTypeTwo
        key={api.cardSection.id}
        image={api.cardSection[2].img}
        title={api.cardSection[2].title}
        content={api.cardSection[2].content}
      />
      <CardTypeOne
        key={api.cardSection.id}
        image={api.cardSection[3].img}
        title={api.cardSection[3].title}
        content={api.cardSection[3].content}
      />
      <SharedCard />
      <SoftwareCTA />
      <Form />
    </>
  );
}
