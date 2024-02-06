import {
  CompanyHero,
  CompanyTestimonial,
  CompanyTeam,
} from "../CompanyComponents/index.js";
import { Form } from "../home/index.js";

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
