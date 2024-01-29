import "./TalentFeatureSection.css";
import TalentFeatureSectionSubModelOne from "./TalentFeatureSectionSubModelOne";
import TalentFeatureSectionSubModelTwo from "./TalentFeatureSectionSubModelTwo";

export default function TalentFeatureSection() {
  return (
    <div className="talent-feature-section-wrapper py-5">
      <TalentFeatureSectionSubModelOne />
      <TalentFeatureSectionSubModelTwo />
    </div>
  );
}
