import SourcingHero from "/SourcingHero.png";
import { InsightHero } from "../../components/InsightComponents";


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
        <h2 className="text-center fw-bold">Currently In Devlopment</h2>
      </div>
    </>
  );
}
