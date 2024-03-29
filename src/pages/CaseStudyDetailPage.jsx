import { useState } from "react";
import { SocialIcon } from "../components/BlogDetailComponents/index.js";
import RecentBlogs from "../components/BlogDetailComponents/RecentBlogs.jsx";
import CaseStudyComponent from "./CaseStudyComponent.jsx";

export default function CaseStudyDetailPage() {
  const [blog, setBlog] = useState(null);

  const singleBlog = {
    "emerge-edu-student-recruiting": {
      title: "Bridging the Gap: Maximizing Salesforce’s Potential",
      hero_image: "",
      hero_heading: "Value Based Hiring",
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
          title : "Solution",
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
    },
  };

  const caseStudyData = [
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
  ];

  return (
    <>
      <section className="container-fluid g-0">
        <div className="row g-0 position-relative">
          <img
            height={600}
            className="blog-hero-img"
            src={blog?.hero_image || "/emerge.png"}
            alt="blog-hero-img"
          />
          <div className="blog-hero-heading-wrapper">
            <h1 className="blog-hero-heading">
              {blog?.hero_heading || singleBlog["emerge-edu-student-recruiting"].title}
            </h1>
          </div>
        </div>
      </section>
      <CaseStudyComponent
        details={singleBlog["emerge-edu-student-recruiting"].details}
      />
      {/* <div className="d-flex justify-content-center align-items-center">
        <img src="/emergeCS.png" alt="" />
      </div> */}
      <SocialIcon />
      <RecentBlogs blogData={caseStudyData} />
    </>
  );
}
