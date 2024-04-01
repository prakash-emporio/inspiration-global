import "./MegaHeader.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "/logo.png";
import DropdownCard from "./DropdownCard";
import dropdownblogImage from "/dropdownblogimage.png";
import { useNavigate } from "react-router-dom";

export default function OffcanvasNavbar() {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  const [isSticky, setIsSticky] = useState(false);

  function handleDisabledClick(e) {
    e.preventDefault();
  }

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

  // added for team section routing
  const navigate = useNavigate();

  const scrollToTeam = () => {
    navigate("/company#team");
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top ${
        isSticky ? "sticky" : ""
      }`}
    >
      <div className="container mt-0 mb-0">
        <NavLink className="navbar-brand" to="/" reloadDocument>
          <img src={logo} alt="company-logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleOffcanvas}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`offcanvas offcanvas-end text-bg-dark ${
            isOffcanvasOpen ? "show" : ""
          }`}
          tabIndex="-1"
          id="offcanvasDarkNavbar"
        >
          <div className="offcanvas-header">
            <NavLink className="navbar-brand" to="/" reloadDocument>
              <img className="m-3" src={logo} alt="company-logo" />
            </NavLink>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={toggleOffcanvas}
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1">
              {/* Software */}
              <li className="nav-item dropdown position-static">
                <NavLink
                  onClick={handleDisabledClick}
                  className="nav-link dropdown-toggle"
                >
                  Software
                </NavLink>
                <ul className="dropdown-menu w-100 shadow">
                  <div className="container-fluid">
                    <div className="row g-0">
                      <div className="col-8 dropdown-card-padding">
                        <div className="col">
                          <p className="dropdown-heading">
                            We Leverage best-of breed software & Innovation to
                            drive our customers transformation
                          </p>
                        </div>
                      </div>
                      {/* dropdown menu side bar */}
                      <div className="col-lg-4 megamenu-sidebar">
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
                        </div>
                      </div>
                    </div>
                  </div>
                </ul>
              </li>
              {/* Service */}
              <li className="nav-item dropdown position-static">
                <NavLink
                  onClick={handleDisabledClick}
                  className="nav-link dropdown-toggle"
                >
                  Services
                </NavLink>
                <ul className="dropdown-menu w-100 shadow">
                  <div className="container-fluid">
                    <div className="row g-0">
                      <div className="col-8 dropdown-card-padding">
                        <div className="col">
                          <p className="dropdown-heading">
                            We help clients focus on the right-fit technology
                            and cloud services to transform your tomorrow
                          </p>
                        </div>
                      </div>
                      {/* dropdown menu side bar */}
                      <div className="col-lg-4 megamenu-sidebar">
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
                  onClick={handleDisabledClick}
                >
                  Talent
                </NavLink>
                <ul className="dropdown-menu w-100 shadow">
                  <div className="container-fluid">
                    <div className="row g-0">
                      <div className="col-8 dropdown-card-padding">
                        <div className="col">
                          <p className="dropdown-heading">
                            We save you valuable time, effort, and resources
                            while ensuring you get the right talent for the job
                          </p>
                        </div>
                        <div className="d-flex justify-content-between">
                          {/* first card inside dropdown */}
                          <div className="col-5">
                            <div className="card card-dropdown-margin">
                              <div>
                                <h5 className="card-title card-title-size">
                                  Sourcing
                                </h5>
                                <button
                                  className="btn mega-header-btn mt-md-3"
                                  href="#"
                                  role="button"
                                >
                                  <NavLink
                                    className="text-decoration-none careers-link"
                                    to="/sourcing"
                                    reloadDocument
                                  >
                                    Sourcing
                                  </NavLink>
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
                          {/* Second card inside dropdown */}
                          <div className="col-5">
                            <div className="card card-dropdown-margin">
                              <div>
                                <h5 className="card-title card-title-size">
                                  Careers
                                </h5>
                                <button
                                  className="btn mega-header-btn mt-md-3"
                                  href="#"
                                  role="button"
                                >
                                  <NavLink
                                    className="text-decoration-none careers-link"
                                    to="/careers"
                                    reloadDocument
                                  >
                                    Careers
                                  </NavLink>
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
                      <div className="col-lg-4 megamenu-sidebar">
                        <div className="d-flex flex-column text-left text-uppercase megamenu-sidebar-common-padding">
                          <NavLink
                            to={"/sourcing"}
                            className="subMenuItems"
                            reloadDocument
                          >
                            Sourcing
                          </NavLink>
                          <NavLink
                            to={"/careers"}
                            className="subMenuItems"
                            reloadDocument
                          >
                            Careers
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </ul>
              </li>
              {/* Industries */}
              <li className="nav-item dropdown position-static">
                <NavLink
                  onClick={handleDisabledClick}
                  className="nav-link dropdown-toggle"
                >
                  Industries
                </NavLink>
                <ul className="dropdown-menu w-100 shadow">
                  <div className="container-fluid">
                    <div className="row g-0">
                      <div className="col-8 dropdown-card-padding">
                        <div className="col">
                          <p className="dropdown-heading">
                            We deliver cross-sector consulting excellence across
                            a diverse set of industries
                          </p>
                        </div>
                      </div>
                      {/* dropdown menu side bar */}
                      <div className="col-lg-4 megamenu-sidebar">
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
                  onClick={handleDisabledClick}
                  className="nav-link dropdown-toggle"
                >
                  Insights
                </NavLink>
                <ul className="dropdown-menu w-100 shadow">
                  <div className="container-fluid">
                    <div className="row g-0">
                      <div className="col-8 dropdown-card-padding">
                        <div className="col">
                          <p className="dropdown-heading">
                            Dive into our research, insights, and real client
                            success stories to accelerate your journey
                          </p>
                        </div>
                        <div className="d-flex">
                          {/* first card inside dropdown */}
                          <DropdownCard
                            title="Blog"
                            buttonName="See All"
                            route="/insight/blog"
                          />
                          {/* Second card inside dropdown */}
                          <DropdownCard
                            title="Case Studies"
                            buttonName="See All"
                            route="/insight/case-study"
                          />
                        </div>
                      </div>
                      {/* dropdown menu side bar */}
                      <div className="col-lg-4 megamenu-sidebar">
                        {/* removed this Blog Card Due to Mobile Navigation Issue */}
                        {/* <div className="d-flex flex-column text-uppercase megamenu-sidebar-padding">
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
                        </div> */}
                        <div className="d-flex flex-column text-left text-uppercase megamenu-sidebar-common-padding">
                          <NavLink
                            to="insight/blog"
                            className="subMenuItems"
                            reloadDocument
                          >
                            Blog
                          </NavLink>
                          <NavLink
                            to="insight/case-study"
                            className="subMenuItems"
                            reloadDocument
                          >
                            Case Study
                          </NavLink>
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
                            By seamlessly integrating human insight with the
                            latest technological advancements, we deliver
                            unparalleled solutions
                          </p>
                        </div>
                        <div className="d-flex">
                          {/* first card inside dropdown */}
                          <DropdownCard
                            title="About Us"
                            buttonName="About Us"
                            route="/company"
                          />
                          {/* Second card inside dropdown */}
                          <DropdownCard
                            title="Team"
                            buttonName="Team"
                            route="/company#team"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 megamenu-sidebar">
                        <div className="d-flex flex-column text-left text-uppercase megamenu-sidebar-common-padding">
                          <NavLink
                            to={"/company"}
                            className="subMenuItems"
                            reloadDocument
                          >
                            About Us
                          </NavLink>
                          <NavLink
                            onClick={scrollToTeam}
                            className="subMenuItems"
                            reloadDocument
                          >
                            Team
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </ul>
              </li>
              {/* Contact Us */}
              <li className="nav-item">
                <NavLink to="/contact-us" className="nav-link">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
