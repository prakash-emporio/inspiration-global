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
      <Hero />
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
