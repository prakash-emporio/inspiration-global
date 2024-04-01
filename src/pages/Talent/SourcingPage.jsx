import { InsightHero } from "../../components/InsightComponents";

const api = {
  heroImg: "/SourcingHero.png",
};

export default function SourcingPage() {
  return (
    <>
      <div
        id="hero-talent-img"
        style={{ backgroundImage: `url(${api.heroImg})` }}
      >
        <InsightHero title="Sourcing" />
      </div>
      <div className="container">
        <h2 className="text-center fw-bold">Currently In Development</h2>
      </div>
    </>
  );
}
