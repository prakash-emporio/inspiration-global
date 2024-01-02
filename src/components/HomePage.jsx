import React from "react";
import {
  Hero,
  Testimonials,
  Content,
  Services,
  Section,
  CustomForm,
  Footer,
} from "./Homepage/index.js";

export default function Homepage() {
  return (
    <div className="container overflow-hidden">
      <Hero />
      <Testimonials />
      <Content />
      <Services />
      <Section />
      <CustomForm />
      {/* <Footer /> */}
    </div>
  );
}
