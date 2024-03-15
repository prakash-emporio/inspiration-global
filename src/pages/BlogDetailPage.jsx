import { useEffect, useState } from "react";
import { SocialIcon } from "../components/BlogDetailComponents/index.js";
import { useParams } from "react-router-dom";
import axios from "axios";
import BlogComponent from "../components/BlogDetailComponents/BlogComponent.jsx";
import RecentBlogs from "../components/BlogDetailComponents/RecentBlogs.jsx";

export default function BlogDetailPage() {
  const [blog, setBlog] = useState(null);

  const singleBlog = {
    "why-value-based-hiring-is-important-for-a-company": {
      hero_image: "",
      hero_heading: "Value Based Hiring",
      details: [
        {
          title: "",
          content: [
            "According to the study, 45 percent of new employees quit within the first year. Half of recruiting managers believe they could have made a better choice. These staggering figures reflect the tragic truth of the pandemic’s current situation.",

            "The value put on recruiting has never been stronger in an era where work from home is gaining acceptance. It is difficult to find, recruit, and keep top talent, and every company understands how difficult it is to compete for top talent.",

            "It is really tough to find the appropriate people with the correct ideals for the right jobs. Despite the fact that attracting outstanding personnel is a high goal for HODs, many companies still perceive recruiting to be the primary job of the HR department.",

            "The industry has not fully adopted the ethos of sharing joint ownership for excellent hires. It is not only about finding and hiring a candidate. Retention is just as important as placement. What happens if employee turnover keeps increasing?",

            "This is exacerbated by our generation’s greatest calamity, the dreaded “Great Resignation,” which everyone has heard about. There has to be a better method to increase employee engagement and retention. Hiring like-minded employees who fit the company’s culture is one option.",
          ],
          img: "/BlogImgOne.png",
          image_side_text:
            "Agreeableness Conscientiousness Extroversion Openness Neuroticism",
        },
        {
          title: "Culture Suitability",
          content: [
            "Many experts today believe there are five basic personality traits:",

            "Agreeableness Conscientiousness Extroversion Openness Neuroticism",

            "This notion has been confirmed numerous times, dating back to 1949, and it is continuously being developed. These characteristics are more or less consistent throughout an individual’s life.",

            "Therefore, measuring these five characteristics will offer you a good idea of your prospects’ personalities. Each of these “Big 5” has a unique value for each organization, department, and function.",

            "These qualities can be assessed in a number of ways. Colour can be used to signify how effectively candidates display these characteristics, as well as star ratings and even a simple thumbs up or down. Regardless of the signs, the true value of such an assessment is in using it with the support of individuals who know your candidates.",

            "Those who have had the chance to witness a candidate’s performance in a role pay attention to their traits and ideals. This, in my opinion, is one of the most important techniques to discover about your applicants prior to interviewing them.",
          ],
          img: "/BlogImgOne.png",
          image_side_text: "This is something I want to do.",
        },
        {
          title: "Value-Based Recruitment (VBR)",
          content: [
            "Let’s talk about the advantages of VBR now that we’ve seen various ways to analyze these Big Five attributes to put the “value” in value-based recruiting.",

            "The name is the most important feature. It adds value to the situation. It improves the recruitment process, in other words. If a recruiter begins to evaluate these characteristics as part of the initial screening, any applicants that are selected will be that much more appealing to hiring managers. Employees who fit the company’s culture are more likely to develop their own personalities and find work less of a nuisance. Without question, having an engaging workplace enhances efficiency and boosts morale.",

            "Increased efficiency, satisfaction, and retention are all aided by a more rigorous recruitment process. There’s little motivation for an employee to leave if they’re happy at work. Besides, employee engagement has shifted from what discourages employees from leaving to what motivates them to stay. “This is something I have to do,” becomes “This is something I want to do.”",

            "Businesses that understand what makes their employees unique are now gaining traction. They were established to help businesses improve their hiring by identifying candidate strengths early in the process. Internal hiring follows the same mentality and technique.",

            "Every new employee is thoroughly evaluated to see if they fit the company’s desired mentality. The attributes they possess, as well as how complementary these qualities are to the rest of the team. It has never been so “stress-free” to go to work before. It is for this reason that organizations like Google have risen and continue to expand.",
          ],
          img: "/BlogImgOne.png",
          image_side_text:
            "It is time to break the norm and hire people who are willing to go the extra mile.",
        },
        {
          title: "Begin Value-Based Hiring",
          content: [
            "Get out there and begin making an impact now that you’ve gained fresh knowledge and perspectives. It only takes a few of us to embrace such tactics and start a domino effect that will make our jobs more interesting and exciting!",

            "It is time to break the norm and hire people who are willing to go the extra mile.",
          ],
          img: "",
          image_side_text: "",
        },
      ],
    },
  };

  const { slug } = useParams();

  function getBlogBySlug(blogSlug) {
    const backendAPI = import.meta.env.VITE_IG_BACKEND_API;
    return `${backendAPI}get-post-detail/${blogSlug}`;
  }

  async function downloadBlog() {
    const response = await axios.get(getBlogBySlug(slug));
    setBlog(response.data);
  }

  useEffect(() => {
    // console.log(slug);
    downloadBlog();
  }, [slug]);
  return (
    <>
      <section className="container-fluid g-0">
        <div className="row g-0 position-relative">
          <img
            height={600}
            className="blog-hero-img"
            src={blog?.hero_image || "/blogDetail.png"}
            alt=""
          />
          <div className="blog-hero-heading-wrapper">
            <h1 className="blog-hero-heading">
              {blog?.hero_heading || "Dummy Title Is Showing"}
            </h1>
          </div>
        </div>
      </section>
      {/* <div
        id="hero-talent-img"
        style={{ backgroundImage: `url(${blog?.hero_image || "/blogDetail.png"})` }}
      >
        <BlogDetailHero title="Blog" />
      </div> */}
      <BlogComponent
        details={
          singleBlog["why-value-based-hiring-is-important-for-a-company"]
            .details
        }
      />
      <SocialIcon />
      <RecentBlogs blogData={blog?.recent_posts} />
    </>
  );
}
