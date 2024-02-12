import {
  IndustryCardSection,
  IndustryHero,
  IndustryTestimonials,
} from "../IndustryComponents";
import { Form } from "../home/index.js";
import { SharedCard } from "../Shared/index.js";
import { SoftwareCTA } from "../SoftwareComponents/index.js";

export default function IndustryPage() {
  return (
    <>
      <IndustryHero />
      <IndustryTestimonials />
      <IndustryCardSection />
      <SharedCard />
      <SoftwareCTA />
      <Form />
    </>
  );
}
