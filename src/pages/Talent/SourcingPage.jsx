import { InsightHero } from "../../components/InsightComponents";
import SourcingHero from "/SourcingHero.png";

export default function SourcingPage() {
  return (
    <>
      <div
        id="hero-talent-img"
        style={{ backgroundImage: `url(${SourcingHero})` }}
      >
        <InsightHero title="Sourcing" />
      </div>
      <div className="container">
        <h2 className="text-center fw-bold">Currently In Development</h2>
      </div>
    </>
  );
}
