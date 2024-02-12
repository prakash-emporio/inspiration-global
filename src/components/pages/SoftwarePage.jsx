import { Form } from "../home/index.js";
import { SharedCard } from "../Shared/index.js";
import {
  CardSection,
  FeatureSection,
  SoftwareCTA,
  SoftwareHero,
} from "../SoftwareComponents/index.js";

import { useLocation } from "react-router-dom";

export default function SoftwarePage() {
  const location = useLocation();
  return (
    <>
      <SoftwareHero />
      <FeatureSection activeRoute={location.pathname} />
      <CardSection />
      <SharedCard />
      <SoftwareCTA />
      <Form />
    </>
  );
}
