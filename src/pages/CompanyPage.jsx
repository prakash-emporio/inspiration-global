import {
  CompanyTestimonial,
  NewCompanyHero,
  CompanyTeam,
} from "../components/CompanyComponents/index.js";
import { Form } from "../components/home/index.js";

const api = {
  heroImg: "/companyhero.png",
};

export default function CompanyPage() {
  return (
    <div className="company-background-color">
      <div
        id="company-hero-img"
        style={{ backgroundImage: `url(${api.heroImg})` }}
      >
        <NewCompanyHero title="About Us" subtitle="Our Core" />
      </div>
        <CompanyTestimonial />
      <CompanyTeam />
      <Form />
    </div>
  );
}
