import DummyHero from "../home/DummyHero.jsx";
import {
  Hero,
  CompanySection,
  TestimonialSection,
  Content,
  CommonCard,
  ExtraCard,
  Services,
  CTA,
  Form,
} from "../home/index.js";

export default function Homepage() {
  return (
    <div className="">
      {/* <Hero /> */}
      <DummyHero />
      <CompanySection/>
      <TestimonialSection />
      <Content />
      <CommonCard />
      <ExtraCard />
      <Services />
      <CTA />
      <Form />
    </div>
  );
}
