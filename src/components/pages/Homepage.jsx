import {
  Hero,
  CompanySection,
  TestimonialSection,
  FirstContent,
  SecondContent,
  CommonCard,
  ThirdContent,
  ExtraCard,
  ServiceCard,
  CTA,
  Form,
} from "../home/index.js";

export default function Homepage() {
  return (
    <div className="">
      <Hero />
      <CompanySection />
      <TestimonialSection />
      <FirstContent />
      <SecondContent />
      <CommonCard />
      <ThirdContent />
      <ExtraCard />
      <ServiceCard/>
      <CTA />       
      <Form />
    </div>
  );
}
