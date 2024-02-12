import {
  ServicesHero,
  ServicesTestimonials,
  ServicesCardSection,
  ServicesFeatureSection,
} from "../ServicesComponents/index.js";
import { SharedCard } from "../Shared/index.js";
import { Form } from "../home/index.js";
import { SoftwareCTA } from "../SoftwareComponents/index.js";

export default function ServicePage() {
  return (
    <>
      <ServicesHero />
      <ServicesTestimonials />
      <ServicesCardSection />
      <ServicesFeatureSection />
      <SharedCard />
      <SoftwareCTA />
      <Form />
    </>
  );
}
