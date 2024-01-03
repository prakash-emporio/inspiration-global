import aramaco from "/aramco.png";
import datacore from "/datacore.png";
import delaware from "/delaware.png";
import maryland from "/maryland.jpg";
import pennselvania from "/pennselvania.png";
import "../css/CompanySection.css";

export default function CompanySection() {
  return (
    <div className="">
      <div className="company-section">
        <img
          loading="lazy"
          width={120}
          src={aramaco}
          className="m-1 max-w-none"
          alt="aramaco"
        />
        <img
          loading="lazy"
          width={150}
          src={datacore}
          className="m-1 max-w-none"
          alt="datacore"
        />
        <img
          loading="lazy"
          width={100}
          src={maryland}
          className="m-1 max-w-none"
          alt="dhs"
        />
        <img
          loading="lazy"
          width={200}
          src={pennselvania}
          className="m-1 max-w-none"
          alt="pensslyvania"
        />
        <img
          loading="lazy"
          width={150}
          src={delaware}
          className="m-1 max-w-none"
          alt="revenue"
        />
      </div>
    </div>
  );
}
