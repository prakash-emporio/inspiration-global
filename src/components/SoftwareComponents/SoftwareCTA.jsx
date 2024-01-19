import "./SoftwareCTA.css";

export default function SoftwareCTA() {
  return (
    <div className="card software-cta-card-color">
      <div className="card-body d-flex justify-content-between">
        <h1 className="p-5 card-title software-cta-title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna
          nulla vitae laoreet augue. Amet feugiat est integer dolor auctor
          adipiscing nunc urna sit.
        </h1>
        <div className="px-5 d-flex flex-column justify-content-end">
          <p className="card-text software-cta-text-1">Name Surname</p>
          <p className="card-text software-cta-text-2">Title</p>
        </div>
      </div>
    </div>
  );
}
