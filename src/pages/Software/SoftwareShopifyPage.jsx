import { useState } from "react";
import { Form } from "../../components/home/index.js";
import { SharedCard, SharedCTA } from "../../components/Shared/index.js";
import {
  CardTypeOne,
  CardTypeTwo,
  FeatureSection,
  SoftwareHero,
} from "../../components/SoftwareComponents/index.js";

const api = {
  id: "21424124214",
  img: "/ShopifyHero.png",
  header: {
    id: "1323",
    title: "Cloud Ready consulting and AWS application development services",
    subtitle:
      "Designing and developing applications for AWS cloud requires a different approach compared to traditional on-premises applications",
    logo: "/SoftwareShopify.svg",
  },
  featureSection: {
    id: "132ug",
    title: "Enterprise Performance at",
    subtitle: "SCALE",
    content:
      "IG and AWS collaborate to provide clients with expert industry knowledge and a vast network of cloud engineering resources. Together, they assist clients in developing agile, custom solutions that are bolstered by the power of the AWS cloud.",
  },
  cardSection: {
    1: {
      id: "1",
      img: "/softwareConsulting.png",
      title: "Consulting",
      content:
        "At IG, we take pride in being your trusted partner for all your AWS consulting needs. With a wealth of experience and a deep understanding of AWS technologies, our team of highly skilled professionals is here to guide you through the intricate world of cloud computing, ensuring that you harness the full power of AWS to drive your business forward. We are passionate about helping you drive innovation, reducing costs, and ensuring the highest level of security and compliance. Let us take your AWS journey to new heights. Contact us today to get started on your path to AWS success",
    },
    2: {
      id: "2",
      img: "/softwareLift.png",
      title: "Lift & Shift",
      content:
        "In today's digital age, businesses increasingly rely on critical components like database platforms, middleware engines, and ERP & CRM systems to keep their operations running seamlessly. These infrastructures serve as the backbone of modern enterprises, ensuring data integrity, application performance, and efficient resource utilization. However, to stay competitive and agile, it's imperative to consider migrating these essential components to the cloud. IG’s AWS Lift and Shift services provides a transformational approach that can lead to substantial benefits, including cost savings, resource optimization, and enhanced redundancy and disaster recovery capabilities",
    },
    3: {
      id: "3",
      img: "/softwareDesign.png",
      title: "Design & Build",
      content:
        "At IG, our team of AWS-certified experts is dedicated to helping you design, build, and deploy high-performance applications on AWS. We understand the importance of scalability, reliability, and cost-effectiveness in today's competitive landscape. Whether you're developing a cutting-edge web application or a data-driven backend service, we have the knowledge and experience to guide you in utilizing AWS's vast resources to make your application a success. Contact us today to embark on your journey to high-performance application development with AWS",
    },
  },
};

export default function SoftwareShopifyPage() {
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
      <div
        className="hero-background-img software-hero-background-img"
        style={{ backgroundImage: `url(${api.img})` }}
      >
        <SoftwareHero
          title={api.header.title}
          text={api.header.subtitle}
          heroLogo={api.header.logo}
        />
      </div>
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
      <SharedCTA />
      <Form />
    </>
  );
}
