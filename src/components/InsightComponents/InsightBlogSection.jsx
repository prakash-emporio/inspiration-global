import blogimage1 from "/blogimage1.png";
import blogimage2 from "/blogimage2.png";
import blogimage3 from "/blogimage3.png";
import blogimage4 from "/blogimage4.png";
import "./insight.css";
import { useNavigate } from "react-router-dom";

const InsightCard = ({ title, text, image, id }) => {
  const navigator = useNavigate();

  function handleClick() {
    navigator(`/insight/${id}`);
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
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="ms-2 icon-svg"
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

export default function InsightBlogSection() {
  const blogData = [
    {
      id: 1,
      title: "Value Based Hiring",
      text: "Convallis blandit aliquam quam lectus nisl odio convallis mi eu. Et non at mattis nisi. Dignissim etiam cursus non porttitor. Libero in est ut sagittis amet et enim. Ut scelerisque ultricies donec...",
      image: blogimage1,
    },
    {
      id: 2,
      title: "How Has Technology Changed The Recruitment Sector",
      text: "Convallis blandit aliquam quam lectus nisl odio convallis mi eu. Et non at mattis nisi. Dignissim etiam cursus non porttitor. Libero in est ut sagittis amet et enim. Ut scelerisque ultricies donec...",
      image: blogimage2,
    },
    {
      id: 3,
      title: "Leveraging GenAI in your company",
      text: "Convallis blandit aliquam quam lectus nisl odio convallis mi eu. Et non at mattis nisi. Dignissim etiam cursus non porttitor. Libero in est ut sagittis amet et enim. Ut scelerisque ultricies donec...",
      image: blogimage3,
    },
    {
      id: 4,
      title: "5 Methods For Attracting Top Talent",
      text: "Convallis blandit aliquam quam lectus nisl odio convallis mi eu. Et non at mattis nisi. Dignissim etiam cursus non porttitor. Libero in est ut sagittis amet et enim. Ut scelerisque ultricies donec...",
      image: blogimage4,
    },
  ];

  return (
    <div className="container my-5">
      <div className="row">
        {blogData.map((blog) => (
          <div key={blog.id} className="col-md-6 col-lg-6 p-5 cursor-pointer">
            <InsightCard
              title={blog.title}
              text={blog.text}
              image={blog.image}
              id={blog.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
