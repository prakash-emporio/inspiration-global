import aramaco from "/aramco.png";
import datacore from "/datacore.png";
import delaware from "/delaware.png";
import maryland from "/maryland.jpg";
import pennselvania from "/pennselvania.png";
import techmahindra from "/TechMahindra.png";
import testingexpert from "/TestingXpert.png";
import penna from "/Penna.png";
import nysd from "/NewYorkStateDepartmentEducation.png";
import massdot from "/MassDot.png";
import ibs from "/IndependenceBlueCross.png";
import "../css/CompanySection.css";
import Slider from "react-infinite-logo-slider";

export default function CompanySection() {
  return (
    <div className="company-section-wrapper">
      <div className="company-section text-center">
        <Slider
          width="250px"
          duration={40}
          pauseOnHover={true}
          blurBorders={false}
          blurBoderColor={"#fff"}
        >
          <Slider.Slide>
            <img
              loading="lazy"
              width={150}
              src={aramaco}
              className="company-logo"
              alt="aramaco"
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              loading="lazy"
              width={150}
              src={datacore}
              className="company-logo"
              alt="datacore"
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              loading="lazy"
              width={150}
              src={maryland}
              className=""
              alt="dhs"
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              loading="lazy"
              width={200}
              src={pennselvania}
              className="company-logo"
              alt="pensslyvania"
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              loading="lazy"
              width={180}
              src={delaware}
              className="company-logo"
              alt="revenue"
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              loading="lazy"
              width={150}
              src={techmahindra}
              className="company-logo"
              alt="techmahindra"
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              loading="lazy"
              width={180}
              src={testingexpert}
              className="company-logo"
              alt="testingexpert"
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              loading="lazy"
              width={100}
              src={penna}
              className="company-logo"
              alt="penna"
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              loading="lazy"
              width={120}
              src={nysd}
              className="company-logo"
              alt="nysd"
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              loading="lazy"
              width={180}
              src={massdot}
              className="company-logo"
              alt="massdot"
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              loading="lazy"
              width={180}
              src={ibs}
              className="company-logo"
              alt="ibs"
            />
          </Slider.Slide>
        </Slider>
      </div>
    </div>
  );
}
