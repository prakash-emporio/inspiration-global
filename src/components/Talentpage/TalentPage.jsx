import { Form } from "../../components/home/index.js";
import TalentCard from "./TalentCard";
import CTACard from "./CTACard";
import TalentTestimonial from "./TalentTestimonial";
import TalentHero from "./TalentHero.jsx";

export default function TalentPage() {
  return (
    <div>
      <TalentHero />
      <TalentCard />
      <CTACard />
      <TalentTestimonial />
      <Form />
    </div>
  );
}
