import IndustryHero from "./IndustryHero";
import IndustryCard from "./IndustryCard";
import Form from "../home/Form.jsx";
import TalentTestimonial from "../Talentpage/TalentTestimonial.jsx";
import IndustrySecondCard from "./IndustrySecondCard.jsx";

export default function IndustryPage() {
  return (
    <div>
      <IndustryHero />
      <IndustryCard />
      <IndustrySecondCard />
      <TalentTestimonial />
      <Form />
    </div>
  );
}
