import {TalentHero, TalentTestimonials, TalentFeatureSection} from "../TalentComponents/index.js";
import {CommonCard, Form} from "../home/index.js";
import {SoftwareCTA} from "../SoftwareComponents/index.js";

export default function TalentPage() {
  return (
    <>
    <TalentHero />
    <TalentTestimonials />
    <TalentFeatureSection />
    <CommonCard />
    <SoftwareCTA />
    <Form />
    </>
  )
}
