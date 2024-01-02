import React from "react";
import IndustryHero from "./IndustryHero";
import IndustryCard from "./IndustryCard";
import CustomForm from "../Homepage/CustomForm.jsx";
import Footer from "../Homepage/Footer.jsx";
import TalentTestimonial from "../Talentpage/TalentTestimonial.jsx";
import IndustrySecondCard from "./IndustrySecondCard.jsx";

export default function IndustryPage() {
  return (
    <div>
      <IndustryHero />
      <IndustryCard />
      <IndustrySecondCard />
      <TalentTestimonial />
      <CustomForm />
    </div>
  );
}
