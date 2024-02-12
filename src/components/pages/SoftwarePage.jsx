import { Form } from "../home/index.js";
import { SharedCard } from "../Shared/index.js";
import {
  CardSection,
  FeatureSection,
  SoftwareCTA,
  SoftwareHero,
} from "../SoftwareComponents/index.js";

export default function SoftwarePage() {
  return (
    <>
      <SoftwareHero />
      <FeatureSection />
      <CardSection />
      <SharedCard />
      <SoftwareCTA />
      <Form />
    </>
  );
}
