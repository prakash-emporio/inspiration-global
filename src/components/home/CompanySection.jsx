import aramaco from "/aramco.png";
import datacore from "/datacore.png";
import delaware from "/delaware.png";
import maryland from "/maryland.jpg";
import pennselvania from "/pennselvania.png";

export default function CompanySection() {
  return (
    <div className="container">
      <div className="container absolute flex justify-between w-4/5 p-10 mb-10 bg-white border border-white shadow-md left-32 -bottom-60">
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
