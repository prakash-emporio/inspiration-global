import {
  InsightHero,
  InsightBlogSection,
} from "../components/InsightComponents/index.js";
import { Form } from "../components/home/index.js";

const api = {
  imgUrl: "/CaseStudyHero.png",
};

export default function CaseStudyPage() {
  return (
    <>
      <div
        id="hero-talent-img"
        style={{ backgroundImage: `url(${api.imgUrl})` }}
      >
        <InsightHero title="Case Study" />
      </div>
      <InsightBlogSection />
      <Form />
    </>
  );
}
