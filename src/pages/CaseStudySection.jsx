import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/InsightComponents/insight.css";
// import { useEffect, useState } from "react";
// import { getAllBlogs } from "../../utils";

const CaseStudyCard = ({ title, text, image, slug }) => {
  const navigator = useNavigate();

  function handleClick() {
    navigator(`/insight/case-study/${slug}`);
  }

  return (
    <div onClick={handleClick} className="card">
      <img
        src={image}
        className="card-img-top insight-blog-card-img"
        alt="card-img"
      />
      <div className="py-3 card-body">
        <h5 className="card-title industry-blog-card-title">{title}</h5>
        <p className="card-text py-2 industry-blog-card-text ">{text}</p>
        <button className="btn common-card-btn" href="#" role="button">
          Read more
          <svg
            xmlns="https://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="icon-svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.21967 14.7803C5.51256 15.0732 5.98744 15.0732 6.28033 14.7803L13.5 7.56066V13.25C13.5 13.6642 13.8358 14 14.25 14C14.6642 14 15 13.6642 15 13.25V5.75C15 5.33579 14.6642 5 14.25 5H6.75C6.33579 5 6 5.33579 6 5.75C6 6.16421 6.33579 6.5 6.75 6.5H12.4393L5.21967 13.7197C4.92678 14.0126 4.92678 14.4874 5.21967 14.7803Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const caseStudyData = [
  {
    id: 205581,
    title: "Emerge Edu – Student Recruiting",
    excerpt:
      "Emerge Education provides higher education solutions to colleges and universities by growing revenues through student enrollment services.",
    featured_image:
      "https://igapibuilder.brandsnarrative.com/wp-content/uploads/2022/12/11.jpg",
    slug: "emerge-edu-student-recruiting",
  },
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

export default function CaseStudySection() {
  const [loading, setLoading] = useState(false);
  const [blogData, setBlogData] = useState([]);

  // async function downloadAllBlogs() {
  //   const response = await getAllBlogs();
  //   setBlogData(response.data);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   downloadAllBlogs();
  // }, []);

  if (loading) {
    return (
      <div className="container loading-skeleton">
        <div className="row">
          <div className="col">
            <div className="card">
              <img
                src="//placekitten.com/300/200"
                className="card-img-top"
                alt="..."
              />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="//placebear.com/300/200"
                className="card-img-top"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="row">
        {caseStudyData.map((blog) => (
          <div key={blog.id} className="col-md-6 col-lg-6 cursor-pointer">
            <CaseStudyCard
              title={blog.title}
              text={blog.excerpt}
              image={blog?.featured_image || "/blogimage2.png"}
              id={blog.id}
              slug={blog.slug}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
