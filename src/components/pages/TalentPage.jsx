import {TalentHero, TalentTestimonials, TalentFeatureSection} from "../TalentComponents/index.js";
import { Form} from "../home/index.js";
import {SharedCard} from "../Shared/index.js";
import {SoftwareCTA} from "../SoftwareComponents/index.js";

export default function TalentPage() {
  return (
    <>
    <TalentHero />
    <TalentTestimonials />
    <TalentFeatureSection />
    <SharedCard />
    <SoftwareCTA />
    <Form />
    </>
  )
}
