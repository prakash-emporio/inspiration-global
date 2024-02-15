import {TalentHero, TalentTestimonials, TalentFeatureSection} from "../components/TalentComponents/index.js";
import { Form} from "../components/home/index.js";
import {SharedCard} from "../components/Shared/index.js";
import {SoftwareCTA} from "../components/SoftwareComponents/index.js";

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
