import { useEffect, useState } from "react";
import {
  LeftImageRightText,
  RightTextLeftImage,
  SocialIcon,
  MainParagraph,
  ParagraphTypeTwo,
} from "../components/BlogDetailComponents/index.js";
import InsightBlogSection from "../components/InsightComponents/InsightBlogSection.jsx";
import blogDetial from "/blogDetail.png";
import { useParams } from "react-router-dom";

export default function BlogDetailPage() {
  const [blog, setBlog] = useState(null);

  const { id } = useParams();

  function searchBlogById(blogId) {
    return ``;
  }

  async function downloadBlog() {
    const response = await axios.get(searchBlogById(id));
    setBlog(response.data);
  }

  useEffect(() => {
    console.log(id);
  }, []);
  return (
    <>
      <section className="container-fluid g-0">
        <div className="row g-0 position-relative">
          <img className="img-fluid talent-hero-img" src={blogDetial} alt="" />
        </div>
      </section>
      <MainParagraph />
      <LeftImageRightText />
      <ParagraphTypeTwo />
      <RightTextLeftImage />
      <SocialIcon />
      <InsightBlogSection />
    </>
  );
}
