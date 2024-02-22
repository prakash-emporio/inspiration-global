import {
  LeftImageRightText,
  RightTextLeftImage,
  SocialIcon,
  MainParagraph,
  ParagraphTypeTwo,
} from "../components/BlogDetailComponents/index.js";
import InsightBlogSection from "../components/InsightComponents/InsightBlogSection.jsx";
import blogDetial from "/blogDetail.png";

export default function BlogDetailPage() {
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
