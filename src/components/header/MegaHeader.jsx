import { NavLink } from "react-router-dom";
import "./MegaHeader.css";
import logo from "/logo.png";
import { useEffect, useState } from "react";
import dropdownblogImage from "/dropdownblogimage.png";
import DropdownCard from "./DropdownCard";

export default function MegaHeader() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`navbar navbar-expand-lg container-fluid ${
        isSticky ? "sticky" : ""
      }`}
    >
      <NavLink className="navbar-brand" to="/" reloadDocument>
        <img className="m-3" src={logo} alt="company-logo" />
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse margin-code"
        id="collapsibleNavbar"
      >
        <ul className="navbar-nav">
          {/* Software */}
          <li className="nav-item dropdown position-static">
            <NavLink className="nav-link dropdown-toggle">Software</NavLink>
            <ul className="dropdown-menu w-100 shadow">
              <div className="container-fluid">
                <div className="row g-0">
                  <div className="col-8 dropdown-card-padding">
                    <div className="col">
                      <p className="dropdown-heading">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Rem molestias eligendi maxime sed expedita quaerat
                        dolor quasi deserunt delectus enim!
                      </p>
                    </div>
                    <div className="d-flex gap-3">
                      {/* first card inside dropdown */}
                      <DropdownCard
                        title="Software"
                        text="Vitae nulla vel dolor morbi. In in habitasse commodo scelerisque elementum metus."
                        buttonName="Software"
                      />
                    </div>
                  </div>
                  {/* dropdown menu side bar */}
                  <div className="col-4 megamenu-sidebar">
                    <div className="d-flex flex-column text-left text-uppercase megamenu-sidebar-common-padding">
                      <NavLink
                        to={"/software/aws"}
                        className="subMenuItems"
                        reloadDocument
                      >
                        AWS
                      </NavLink>
                      <NavLink
                        to={"/software/oracle"}
                        className="subMenuItems"
                        reloadDocument
                      >
                        Oracle
                      </NavLink>
                      <NavLink
                        to={"/software/salesforce"}
                        className="subMenuItems"
                        reloadDocument
                      >
                        Salesforce
                      </NavLink>
                      <NavLink
                        to={"/software/azure"}
                        className="subMenuItems"
                        reloadDocument
                      >
                        Azure
                      </NavLink>
                      <NavLink
                        to={"/software/shopify"}
                        className="subMenuItems"
                        reloadDocument
                      >
                        Shopify+
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </li>
          {/* Service */}
          <li className="nav-item dropdown position-static">
            <NavLink className="nav-link dropdown-toggle">Services</NavLink>
            <ul className="dropdown-menu w-100 shadow">
              <div className="container-fluid">
                <div className="row g-0">
                  <div className="col-8 dropdown-card-padding">
                    <div className="col">
                      <p className="dropdown-heading">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Rem molestias eligendi maxime sed expedita quaerat
                        dolor quasi deserunt delectus enim!
                      </p>
                    </div>
                    <div className="d-flex">
                      {/* first card inside dropdown */}
                      <DropdownCard
                        title="Services"
                        text="Vitae nulla vel dolor morbi. In in habitasse commodo scelerisque elementum metus."
                        buttonName="Services"
                      />
                    </div>
                  </div>
                  {/* dropdown menu side bar */}
                  <div className="col-4 megamenu-sidebar">
                    <div className="d-flex flex-column text-left text-uppercase megamenu-sidebar-common-padding">
                      <NavLink
                        to={"services/product-engineering"}
                        className="subMenuItems"
                        reloadDocument
                      >
                        Product Engineering
                      </NavLink>
                      <NavLink
                        to={"services/custom-development"}
                        className="subMenuItems"
                        reloadDocument
                      >
                        Custom Development
                      </NavLink>
                      <NavLink
                        to={"services/cloud-services"}
                        className="subMenuItems"
                        reloadDocument
                      >
                        Cloud Services
                      </NavLink>
                      <NavLink
                        to={"services/data-analytics"}
                        className="subMenuItems"
                        reloadDocument
                      >
                        Data & Analytics
                      </NavLink>
                      <NavLink
                        to={"services/artificial-intelligence"}
                        className="subMenuItems"
                        reloadDocument
                      >
                        Artificial Intelligence
                      </NavLink>
                      <NavLink
                        to={"services/cio-advisory"}
                        className="subMenuItems"
                        reloadDocument
                      >
                        CIO Advisory
                      </NavLink>
                      <NavLink
                        to={"services/pmo"}
                        className="subMenuItems"
                        reloadDocument
                      >
                        PMO
                      </NavLink>
                      <NavLink
                        to={"services/security"}
                        className="subMenuItems"
                        reloadDocument
                      >
                        Security
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </li>
          {/* Talent */}
          <li className="nav-item dropdown position-static">
            <NavLink
              className="nav-link dropdown-toggle"
              to={"/talent"}
              reloadDocument
            >
              Talent
            </NavLink>
            <ul className="dropdown-menu w-100 shadow">
              <div className="container-fluid">
                <div className="row g-0">
                  <div className="col-8 dropdown-card-padding">
                    <div className="col">
                      <p className="dropdown-heading">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Rem molestias eligendi maxime sed expedita quaerat
                        dolor quasi deserunt delectus enim!
                      </p>
                    </div>
                    <div className="d-flex">
                      {/* first card inside dropdown */}
                      <DropdownCard
                        title="Sourcing"
                        text="Vitae nulla vel dolor morbi. In in habitasse commodo scelerisque elementum metus."
                        buttonName="Sourcing"
                      />
                      {/* Second card inside dropdown */}
                      <DropdownCard
                        title="Carrers"
                        text="Vitae nulla vel dolor morbi. In in habitasse commodo scelerisque elementum metus."
                        buttonName="Carrers"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </li>
          {/* Industries */}
          <li className="nav-item dropdown position-static">
            <NavLink className="nav-link dropdown-toggle">Industries</NavLink>
            <ul className="dropdown-menu w-100 shadow">
              <div className="container-fluid">
                <div className="row g-0">
                  <div className="col-8 dropdown-card-padding">
                    <div className="col">
                      <p className="dropdown-heading">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Rem molestias eligendi maxime sed expedita quaerat
                        dolor quasi deserunt delectus enim!
                      </p>
                    </div>
                    <div className="d-flex">
                      {/* first card inside dropdown */}
                      <DropdownCard
                        title="Industries"
                        text="Vitae nulla vel dolor morbi. In in habitasse commodo scelerisque elementum metus."
                        buttonName="Industries"
                      />
                    </div>
                  </div>
                  {/* dropdown menu side bar */}
                  <div className="col-4 megamenu-sidebar">
                    <div className="d-flex flex-column text-left text-uppercase megamenu-sidebar-common-padding">
                      <NavLink
                        to={"industry/public-sector"}
                        className="subMenuItems"
                        reloadDocument
                      >
                        Public Sector
                      </NavLink>
                      <NavLink
                        to={"industry/health-care"}
                        className="subMenuItems"
                        reloadDocument
                      >
                        Health Care
                      </NavLink>
                      <NavLink
                        to={"industry/higher-ed"}
                        className="subMenuItems"
                        reloadDocument
                      >
                        Higher ED
                      </NavLink>
                      <NavLink
                        to={"industry/insurance"}
                        className="subMenuItems"
                        reloadDocument
                      >
                        Insurance
                      </NavLink>
                      <NavLink
                        to={"industry/pe-vc"}
                        className="subMenuItems"
                        reloadDocument
                      >
                        PE/VC
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </li>
          {/* Insights */}
          <li className="nav-item dropdown position-static">
            <NavLink
              className="nav-link dropdown-toggle"
              to={"/insight"}
              reloadDocument
            >
              Insights
            </NavLink>
            <ul className="dropdown-menu w-100 shadow">
              <div className="container-fluid">
                <div className="row g-0">
                  <div className="col-8 dropdown-card-padding">
                    <div className="col">
                      <p className="dropdown-heading">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Rem molestias eligendi maxime sed expedita quaerat
                        dolor quasi deserunt delectus enim!
                      </p>
                    </div>
                    <div className="d-flex">
                      {/* first card inside dropdown */}
                      <DropdownCard
                        title="Blog"
                        text="Vitae nulla vel dolor morbi. In in habitasse commodo scelerisque elementum metus."
                        buttonName="See All"
                      />
                      {/* Second card inside dropdown */}
                      <DropdownCard
                        title="Case Studies"
                        text="Vitae nulla vel dolor morbi. In in habitasse commodo scelerisque elementum metus."
                        buttonName="See All"
                      />
                    </div>
                  </div>
                  {/* dropdown menu side bar */}
                  <div className="col-4 megamenu-sidebar">
                    <div className="d-flex flex-column text-uppercase megamenu-sidebar-padding">
                      <img
                        className="blog-image"
                        width={285}
                        height={190}
                        src={dropdownblogImage}
                        alt="blog-image"
                      />
                      <div className="flex-start dropdown-card-margin">
                        <p className="dropdown-blog">Blog</p>
                        <p className="dropdown-blog-title">
                          Value Based Hiring
                        </p>
                        <button
                          className="btn mega-header-btn megamenu-sidebar-btn-top-margin"
                          href="#"
                          role="button"
                        >
                          Read More
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                            className="icon-svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.21967 9.78033C0.512563 10.0732 0.987437 10.0732 1.28033 9.78033L8.5 2.56066L8.5 8.25C8.5 8.66421 8.83579 9 9.25 9C9.66421 9 10 8.66421 10 8.25L10 0.75C10 0.335787 9.66421 0 9.25 0L1.75 0C1.33579 0 1 0.335787 1 0.75C1 1.16421 1.33579 1.5 1.75 1.5L7.43934 1.5L0.21967 8.71967C-0.0732233 9.01256 -0.0732233 9.48744 0.21967 9.78033Z"
                              fill="#5912E4"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </li>
          {/* Company */}
          <li className="nav-item dropdown position-static">
            <NavLink
              className="nav-link dropdown-toggle"
              to={"/company"}
              reloadDocument
            >
              Company
            </NavLink>
            <ul className="dropdown-menu w-100 shadow">
              <div className="container-fluid">
                <div className="row g-0">
                  <div className="col-8 dropdown-card-padding">
                    <div className="col">
                      <p className="dropdown-heading">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Rem molestias eligendi maxime sed expedita quaerat
                        dolor quasi deserunt delectus enim!
                      </p>
                    </div>
                    <div className="d-flex">
                      {/* first card inside dropdown */}
                      <DropdownCard
                        title="About Us"
                        text="Vitae nulla vel dolor morbi. In in habitasse commodo scelerisque elementum metus."
                        buttonName="About Us"
                      />
                      {/* Second card inside dropdown */}
                      <DropdownCard
                        title="Team"
                        text="Vitae nulla vel dolor morbi. In in habitasse commodo scelerisque elementum metus."
                        buttonName="Team"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </li>
          {/* Contact Us */}
          <li className="nav-item">
            <a href="#contactForm" className="nav-link">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
