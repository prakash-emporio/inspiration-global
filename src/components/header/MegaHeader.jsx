import { NavLink } from "react-router-dom";
import "./MegaHeader.css";
import logo from "/logo.png";
import phone from "/phone.png";
import { useState } from "react";

const navItems = [
  { id: 1, label: "Softwares", href: "/software/aws" },
  { id: 2, label: "Services", href: "/services" },
  { id: 3, label: "Talent", href: "/talent" },
  { id: 4, label: "Industries", href: "/industry" },
  { id: 5, label: "Insights", href: "/insight" },
  { id: 6, label: "Company", href: "" },
];

const DropdownMenuItems = [
  {
    id: 1,
    title:
      "Arcu ut nibh penatibus nec felis pretium sollicitudin eu. Odio faucibus eu quis ultrices elementum. Quis.",
    cardDetails: [
      {
        id: 1,
        title: "Software",
        description:
          "Dui ut pretium arcu nisi. In ac tempor gravida duis at. Dolor at egestas duis mauris condimentum vel..",
      },
    ],
    subMenuItems: [
      {
        id: 1,
        title: "AWS",
        href: "/software/aws",
      },
      {
        id: 2,
        title: "Oracle",
        href: "/software/oracle",
      },
      {
        id: 3,
        title: "Salesforce",
        href: "/software/salesforce",
      },
      {
        id: 4,
        title: "Azure",
        href: "/software/azure",
      },
      {
        id: 5,
        title: "Shopify+",
        href: "/software/shopify",
      },
    ],
    refrence: "Software",
  },
  {
    id: 2,
    title:
      "Arcu ut nibh penatibus nec felis pretium sollicitudin eu. Odio faucibus eu quis ultrices elementum. Quis.",
    cardDetails: [
      {
        id: 1,
        title: "Services",
        description:
          "Dui ut pretium arcu nisi. In ac tempor gravida duis at. Dolor at egestas duis mauris condimentum vel.",
      },
    ],
    subMenuItems: [
      {
        id: 1,
        title: "Product Engineering",
        href: "/services",
      },
      {
        id: 2,
        title: "Custom Development",
        href: "/services",
      },
      {
        id: 3,
        title: "Cloud Services",
        href: "/services",
      },
      {
        id: 4,
        title: "Data & Analytics",
        href: "/services",
      },
      {
        id: 5,
        title: "Artificial Intelligence",
        href: "/services",
      },
      {
        id: 6,
        title: "CIO Advisory",
        href: "/services",
      },
      {
        id: 7,
        title: "PMO",
        href: "/services",
      },
      {
        id: 8,
        title: "Security",
        href: "/services",
      },
    ],
    refrence: "Services",
  },
  {
    id: 3,
    title:
      "Arcu ut nibh penatibus nec felis pretium sollicitudin eu. Odio faucibus eu quis ultrices elementum. Quis.",
    cardDetails: [
      {
        id: 1,
        title: "Sourcing",
        description:
          "Dui ut pretium arcu nisi. In ac tempor gravida duis at. Dolor at egestas duis mauris condimentum vel..",
        button: "Sourcing",
      },
      {
        id: 2,
        title: "Careers",
        description:
          "Dui ut pretium arcu nisi. In ac tempor gravida duis at. Dolor at egestas duis mauris condimentum vel.",
        button: "Careers",
      },
    ],
    subMenuItems: [],
    refrence: "Talent",
  },
  {
    id: 4,
    title:
      "Arcu ut nibh penatibus nec felis pretium sollicitudin eu. Odio faucibus eu quis ultrices elementum. Quis.",
    cardDetails: [
      {
        id: 1,
        title: "Industries",
        description:
          "Dui ut pretium arcu nisi. In ac tempor gravida duis at. Dolor at egestas duis mauris condimentum vel..",
      },
    ],
    subMenuItems: [
      {
        id: 1,
        title: "Public Sector",
        href: "",
      },
      {
        id: 2,
        title: "HealthCare",
        href: "",
      },
      {
        id: 3,
        title: "Higher Ed",
        href: "",
      },
      {
        id: 4,
        title: "Insurance",
        href: "",
      },
      {
        id: 5,
        title: "PE/VC",
        href: "",
      },
    ],
    refrence: "Industries",
  },
  {
    id: 5,
    title:
      "Arcu ut nibh penatibus nec felis pretium sollicitudin eu. Odio faucibus eu quis ultrices elementum. Quis.",
    cardDetails: [
      {
        id: 1,
        title: "Blog",
        description:
          "Dui ut pretium arcu nisi. In ac tempor gravida duis at. Dolor at egestas duis mauris condimentum vel..",
        button: "See All",
      },
      {
        id: 2,
        title: "Case Studies",
        description:
          "Dui ut pretium arcu nisi. In ac tempor gravida duis at. Dolor at egestas duis mauris condimentum vel.",
        button: "See All",
      },
    ],
    subMenuItems: [],
    refrence: "Insights",
  },
  {
    id: 6,
    title:
      "Arcu ut nibh penatibus nec felis pretium sollicitudin eu. Odio faucibus eu quis ultrices elementum. Quis.",
    cardDetails: [
      {
        id: 1,
        title: "About Us",
        description:
          "Dui ut pretium arcu nisi. In ac tempor gravida duis at. Dolor at egestas duis mauris condimentum vel..",
        button: "About Us",
      },
      {
        id: 2,
        title: "Team",
        description:
          "Dui ut pretium arcu nisi. In ac tempor gravida duis at. Dolor at egestas duis mauris condimentum vel.",
        button: "Team",
      },
    ],
    subMenuItems: [],
    refrence: "Company",
  },
];

const allowedIds = [3, 5, 6];

export default function MegaHeader() {
  const [haveCard, setHaveCard] = useState(true);
  const [haveSvg, setHaveSvg] = useState(true);
  return (
    <nav className="navbar navbar-expand-lg">
      <NavLink className="navbar-brand" to="/">
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

      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          {navItems.map((item) => (
            <li className="nav-item dropdown position-static" key={item.id}>
              <NavLink
                className="nav-link dropdown-toggle"
                to={item.href}
              >
                {item.label}
              </NavLink>
              <ul className="dropdown-menu w-100 shadow">
                <div className="">
                  <div className="row g-0">
                    <div className="col-8 px-5 py-4 d-none d-sm-block d-sm-none d-md-block">
                      <div className="col">
                        <p className="dropdown-heading">
                          {DropdownMenuItems[item.id - 1].title}
                        </p>
                      </div>
                      <div className="d-flex gap-3">
                        <div className="col-5">
                          <div className="card">
                            <div className="card-body">
                              <h5 className="card-title card-title-size">
                                {
                                  DropdownMenuItems[item.id - 1].cardDetails[0]
                                    .title
                                }
                              </h5>
                              <p className="card-text my-card-text">
                                {
                                  DropdownMenuItems[item.id - 1].cardDetails[0]
                                    .description
                                }
                              </p>
                              {allowedIds.includes(item.id) && (
                                <button
                                  className="btn mega-header-btn"
                                  href="#"
                                  role="button"
                                >
                                  {
                                    DropdownMenuItems[item.id - 1]
                                      .cardDetails[0].button
                                  }
                                  {haveSvg && (
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
                                      />
                                    </svg>
                                  )}
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                        {haveCard && (
                          <div className="col-5">
                            {DropdownMenuItems[item.id - 1]?.cardDetails[1] && (
                              <div className="card">
                                <div className="card-body">
                                  <h5 className="card-title card-title-size">
                                    {
                                      DropdownMenuItems[item.id - 1]
                                        .cardDetails[1].title
                                    }
                                  </h5>
                                  <p className="card-text my-card-text">
                                    {
                                      DropdownMenuItems[item.id - 1]
                                        .cardDetails[1].description
                                    }
                                  </p>
                                  <button
                                    className="btn mega-header-btn"
                                    href="#"
                                    role="button"
                                  >
                                    {
                                      DropdownMenuItems[item.id - 1]
                                        .cardDetails[1].button
                                    }
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
                                      />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-4 megamenu-sidebar">
                      <div className="d-flex flex-column text-left text-uppercase gap-4 p-3">
                        {DropdownMenuItems[item.id - 1].subMenuItems.map(
                          (subItem) => (
                            <NavLink
                              to={subItem.href}
                              className="subMenuItems"
                              key={subItem.id}
                            >
                              {subItem.title}
                            </NavLink>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
            </li>
          ))}
          <li className="nav-item">
            <NavLink className="nav-link">
              <img className="" src={phone} alt="mobile-phone-logo" />
              123.456.789
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
