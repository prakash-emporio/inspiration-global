import { CommonCard, Form } from "../home/index.js";
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
      <CommonCard />
      <SoftwareCTA />
      <Form />
    </>
  );
}
