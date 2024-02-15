import {
  CompanyHero,
  CompanyTestimonial,
  CompanyTeam,
} from "../components/CompanyComponents/index.js";
import { Form } from "../components/home/index.js";

export default function CompanyPage() {
  return (
    <div className="company-background-color ">
      <CompanyHero />
      <CompanyTestimonial />
      <CompanyTeam />
      <Form />
    </div>
  );
}
