import { SharedCard } from "../Shared/index.js";
import {
  Hero,
  CompanySection,
  StatsSection,
  ImpactTalentWrapper,
  VideoCard,
  BlogCaseStudyCard,
  ServiceCard,
  CTA,
  Form,
} from "../home/index.js";

export default function Homepage() {
  return (
    <>
      <Hero />
      <CompanySection />
      <StatsSection />
      <ImpactTalentWrapper />
      <SharedCard />
      <VideoCard />
      <BlogCaseStudyCard />
      <ServiceCard />
      <CTA />
      <Form />
    </>
  );
}
