import { useState } from "react";
import { SocialIcon } from "../components/BlogDetailComponents/index.js";
import RecentBlogs from "../components/BlogDetailComponents/RecentBlogs.jsx";
import CaseStudyComponent from "./CaseStudyComponent.jsx";

export default function CaseStudyDetailPage() {
  const [caseStudies, setCaseStudies] = useState({});

  const caseStudy = {
    "emerge-edu-student-recruiting": {
      hero_image: "/emerge.png",
      hero_heading: "Bridging the Gap: Maximizing Salesforce’s Potential",
      details: [
        {
          title: "Background",
          content: [
            "Emerge Education provides higher education solutions to colleges and universities by growing revenues through student enrollment services. Their expert team members provide solutions and exceptional results by bringing decades of experience in each critical area of higher education and specializing in student acquisition and retention for higher education institutions.",

            "Emerge Education leverages Salesforce throughout the entire student lifecycle where they underwent different sales stages and workflows from establishing first contact to the document submission and enrollment and retention stages.",
          ],
        },
        {
          title: "Challenge",
          content: [
            "Emerge’s team leverages several applications with Salesforce being their primary for prospects, leads, and applicants. A significant portion of their process was manual with little visibility into the status and workflows of their lifecycle. Additionally, there were neither executive views nor a predictable way of understanding the probability of final application and acceptance.",
          ],
          img: "/BlogImgTwo.png",
          img_content_title: "Outcomes",
          image_side_text: [
            "Risk mitigation through readiness certification for leads and applicants",
            "Increased prospect-driven engagement through role-based dashboard views and data-driven insights",
          ],
        },
        {
          title: "Approach",
          content: [
            "In phase-I, we adopted our proven framework for success: performing a Discovery and Strategy phase to fully understand Emerge’s business, marketing, and enrollment process in utilizing its existing Salesforce and technology platform, data analysis, and associated tool sets..",
          ],
        },
        {
          title: "Solution",
          subTitle: "Discovery: Gap Identification Through Analysis",
          content: [
            "In order to identify the gaps in Emerge Edu’s student acquisition process we conducted an ecosystem review of internal and external stakeholders along with data capturing in the student acquisition process, Salesforce infrastructure, and technology architecture analysis.",
          ],
        },
        {
          subTitle: "Strategy: Statement of Strategic Understanding",
          content: [
            "After conducting a gap analysis, we focused our attention on the most pressing issues and began developing solutions based on those findings. We validated and prioritised the areas that need more attention and are the catalysts for the growth of Emerge Education, customer experience, and managing volume without compromising the quality which helped us to arrive at the Statement of Strategic Understanding",
          ],
          img: "/BlogImgThree.png",
          image_side_text: [
            "Improved lead funnels & insights by restructuring Salesforce workflow process",
            "Revised operations plan for higher efficiency and productivity",
            "Seamless Emerge Education User/Lead Journey Flow",
          ],
        },
      ],
      recent_case_studies: [
        {
          id: 205581,
          title: "Large Vitamin Retailer",
          excerpt:
            "A large vitamin retailer dedicated to helping individuals fulfill their health and wellness needs. The company is a leading omni-channel specialty retailer of nutritional products based in Secaucus, New Jersey. With over 700 stores throughout the United States and Puerto Rico.",
          featured_image:
            "https://igapibuilder.brandsnarrative.com/wp-content/uploads/2022/12/11.jpg",
          slug: "emerge-edu-student-recruiting",
        },
        {
          id: 205581,
          title: "Global Water treatment Company",
          excerpt:
            "A global water treatment company with a network of dealers and direct operations spawned across 90 countries with 1,000 dealers, over 600 in North America alone, and over 7,500 employees.",
          featured_image:
            "https://igapibuilder.brandsnarrative.com/wp-content/uploads/2022/12/11.jpg",
          slug: "emerge-edu-student-recruiting",
        },
      ],
    },
    "integrating--online-ecommerce-personalization": {
      hero_image: "/emerge.png",
      hero_heading: "Integrating Online E-Commerce Personalization",
      details: [
        {
          title: "Background",
          content: [
            "A large vitamin retailer dedicated to helping individuals fulfill their health and wellness needs. The company is a leading omni-channel specialty retailer of nutritional products based in Secaucus, New Jersey. With over 700 stores throughout the United States and Puerto Rico.",
          ],
        },
        {
          title: "Challenge",
          content: [
            "Retained by retailer to spearhead and oversee the acquisition of specialty company and the seamless integration of an online e-commerce personalization tool into the company's existing operations, complete with a fresh branding approach.",
          ],
          img: "/BlogImgTwo.png",
          img_content_title: "",
          image_side_text: [
            "Risk mitigation through readiness certification for leads and applicants",
            "Increased prospect-driven engagement through role-based dashboard views and data-driven insights",
          ],
        },
        {
          title: "Solution",
          subTitle: "",
          content: [
            "The opportunity presented was to seamlessly integrate the new personalization engine and its capabilities into their established omnichannel business. This integration was to be achieved through a rebranding and relaunch of the new platform, aimed at delivering an exceptional customer experience. With an increasing number of competitors entering the personalization arena, The new platform offered the retailer a means to gain additional market share and stand out as a premier omnichannel destination.",
          ],
        },
        {
          subTitle: "",
          content: [
            "Recognizing the significance of customer data acquisition in staying competitive, particularly in meeting the expectations for personalization and individualized relationships, was crucial. By implementing the new program, the retailer aimed to not only expand its customer base but also drive increased wallet share and enhance brand traffic.",
          ],
          img: "/BlogImgThree.png",
          image_side_text: [
            "Improved lead funnels & insights by restructuring Salesforce workflow process",
            "Revised operations plan for higher efficiency and productivity",
            "Seamless Emerge Education User/Lead Journey Flow",
          ],
        },
      ],
      recent_case_studies: [
        {
          id: 205581,
          title: "Large Vitamin Retailer",
          excerpt:
            "A large vitamin retailer dedicated to helping individuals fulfill their health and wellness needs. The company is a leading omni-channel specialty retailer of nutritional products based in Secaucus, New Jersey. With over 700 stores throughout the United States and Puerto Rico.",
          featured_image:
            "https://igapibuilder.brandsnarrative.com/wp-content/uploads/2022/12/11.jpg",
          slug: "emerge-edu-student-recruiting",
        },
        {
          id: 205581,
          title: "Global Water treatment Company",
          excerpt:
            "A global water treatment company with a network of dealers and direct operations spawned across 90 countries with 1,000 dealers, over 600 in North America alone, and over 7,500 employees.",
          featured_image:
            "https://igapibuilder.brandsnarrative.com/wp-content/uploads/2022/12/11.jpg",
          slug: "emerge-edu-student-recruiting",
        },
      ],
    },
  };

  return (
    <>
      <section className="container-fluid g-0">
        <div className="row g-0 position-relative">
          <img
            className="blog-hero-img"
            src={caseStudy["emerge-edu-student-recruiting"].hero_image}
            alt="blog-hero-img"
          />
          <div className="blog-hero-heading-wrapper">
            <h1 className="blog-hero-heading">
              {caseStudy["emerge-edu-student-recruiting"].hero_heading}
            </h1>
          </div>
        </div>
      </section>
      <CaseStudyComponent
        details={caseStudy["emerge-edu-student-recruiting"].details}
      />
      <SocialIcon />
      <RecentBlogs blogData={caseStudy["emerge-edu-student-recruiting"].recent_case_studies} />
    </>
  );
}
