import "./insight.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllBlogs } from "../../utils";

const InsightCard = ({ title, text, image, slug }) => {
  const navigator = useNavigate();

  function handleClick() {
    navigator(`/insight/blog/${slug}`);
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

export default function InsightBlogSection() {
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState([]);

  async function downloadAllBlogs() {
    const response = await getAllBlogs();
    setBlogData(response.data);
    setLoading(false);
  }

  useEffect(() => {
    downloadAllBlogs();
  }, []);

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
        {blogData.map((blog) => (
          <div key={blog.id} className="col-md-6 col-lg-6 cursor-pointer">
            <InsightCard
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
