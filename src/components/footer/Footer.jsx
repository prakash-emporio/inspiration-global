import "../css/Footer.css";
import { NavLink } from "react-router-dom";
import logo from "/logo.png";
import facebook from "/facebook.png";
import linkedin from "/linkedin.png";

const footerData = [
  { id: 1, label: "Software & Services", link: "" },
  { id: 2, label: "Talent", link: "" },
  { id: 3, label: "Industries", link: "" },
  { id: 4, label: "Insights", link: "" },
  { id: 5, label: "Company", link: "" },
];

export default function Footer() {
  return (
    <footer className="d-grid py-5 main-footer ">
      <div className="container">
        <div className="row justify-content-between">
          <div className="mb-3 col-6 col-md-2">
            <ul className="nav flex-column">
              {footerData.map((item) => (
                <li key={item.id} className="mb-2 nav-item">
                  <NavLink href={item.link} className="p-2 nav-link">
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-3 col-md-6">
            <div className="d-flex justify-content-end">
              <img className="footer-main-logo" src={logo} alt="company-logo" />
            </div>
            <p className="footer-main-text">
              From Concept to Completion <br /> with Optimal Solutions
            </p>
          </div>
        </div>

        <div className="py-4 my-4 d-flex flex-column flex-sm-row justify-content-between border-top footer-last-text">
          <p>Copyright &copy; 2023 Inspiration Global | All rights reserved</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="130"
            height="130"
            viewBox="0 0 130 130"
            fill="none"
          >
            <path
              d="M64.9999 0C29.3032 0 0 29.1763 0 64.7185C0 100.261 29.3032 129.437 64.9999 129.437C100.697 129.437 130 100.261 130 64.7185C130 29.1763 100.697 0 64.9999 0ZM64.9999 106.627C41.5573 106.627 22.9098 87.5292 22.9098 64.7185C22.9098 41.9079 42.0901 22.8106 64.9999 22.8106C87.9098 22.8106 107.09 41.9079 107.09 64.7185C107.09 87.5292 87.9098 106.627 64.9999 106.627Z"
              fill="url(#paint0_linear_201_675)"
            />
            <path
              d="M65.0004 22.8108C41.5578 22.8108 22.9102 41.9081 22.9102 64.7187C22.9102 87.5294 42.0905 106.627 65.0004 106.627C87.9102 106.627 107.091 87.5294 107.091 64.7187C107.091 41.9081 87.9102 22.8108 65.0004 22.8108ZM65.0004 95.4867C47.9512 95.4867 34.0988 81.6941 34.0988 64.7187C34.0988 47.7433 47.9512 33.9509 65.0004 33.9509C82.0495 33.9509 95.9021 47.7433 95.9021 64.7187C95.9021 81.6941 82.0495 95.4867 65.0004 95.4867Z"
              fill="#A1F157"
            />
            <defs>
              <linearGradient
                id="paint0_linear_201_675"
                x1="65"
                y1="0"
                x2="65"
                y2="129.437"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#8852F2" />
                <stop offset="1" stopColor="#8852F2" stopOpacity={0} />
              </linearGradient>
            </defs>
          </svg>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <NavLink className="link-body-emphasis" href="#">
                <img src={facebook} alt="facebook-icon" />
              </NavLink>
            </li>
            <li className="ms-3">
              <NavLink className="link-body-emphasis" href="#">
                <img src={linkedin} alt="linkedin-icon" />
              </NavLink>
            </li>
          </ul>
          <p>Terms of Service</p>
          <p>Die Policy</p>
        </div>
      </div>
    </footer>
  );
}
