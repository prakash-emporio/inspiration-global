import {
  CompanyHero,
  CompanyTestimonial,
  CompanyTeam,
} from "../CompanyComponents/index.js";
import { Form } from "../home/index.js";

export default function CompanyPage() {
  return (
    <>
      <CompanyHero />
      <CompanyTestimonial />
      <CompanyTeam />
      <Form />
    </>
  );
}
