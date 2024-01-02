import React from "react";
import { CustomForm, Footer } from "../../components/Homepage/index.js";
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
      <CustomForm />
    </div>
  );
}
