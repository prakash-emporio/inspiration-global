import {
  InsightBlogSection,
  InsightHero,
} from "../components/InsightComponents/index.js";
import { Form } from "../components/home/index.js";

const api = {
  imgUrl: "/insighthero.png",
};

export default function InsightPage() {
  return (
    <>
      <div
        id="hero-talent-img"
        style={{ backgroundImage: `url(${api.imgUrl})` }}
      >
        <InsightHero title="Blog" />
      </div>
      <InsightBlogSection />
      <Form />
    </>
  );
}
