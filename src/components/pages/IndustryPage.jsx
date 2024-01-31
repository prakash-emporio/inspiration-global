import {
  IndustryCardSection,
  IndustryHero,
  IndustryTestimonials,
} from "../IndustryComponents";
import { CommonCard, Form } from "../home/index.js";
import { SoftwareCTA } from "../SoftwareComponents/index.js";

export default function IndustryPage() {
  return (
    <>
      <IndustryHero />
      <IndustryTestimonials />
      <IndustryCardSection />
      <CommonCard />
      <SoftwareCTA />
      <Form />
    </>
  );
}
