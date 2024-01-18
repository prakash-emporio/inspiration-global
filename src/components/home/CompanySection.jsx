import aramaco from "/aramco.png";
import datacore from "/datacore.png";
import delaware from "/delaware.png";
import maryland from "/maryland.jpg";
import pennselvania from "/pennselvania.png";
import "../css/CompanySection.css";

export default function CompanySection() {
  return (
    <div className="company-section-wrapper mx-5">
      <div className="company-section">
        <img
          loading="lazy"
          width={120}
          src={aramaco}
          className=""
          alt="aramaco"
        />
        <img
          loading="lazy"
          width={150}
          src={datacore}
          className=""
          alt="datacore"
        />
        <img
          loading="lazy"
          width={100}
          src={maryland}
          className=""
          alt="dhs"
        />
        <img
          loading="lazy"
          width={200}
          src={pennselvania}
          className=""
          alt="pensslyvania"
        />
        <img
          loading="lazy"
          width={150}
          src={delaware}
          className=""
          alt="revenue"
        />
      </div>
    </div>
  );
}
