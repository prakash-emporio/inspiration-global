import "./Footer.css";
import { NavLink } from "react-router-dom";
import logo from "/logo.png";

const footerData = [
  { id: 1, label: "Software", link: "/software/aws" },
  { id: 2, label: "Services", link: "/services/product-engineering" },
  { id: 3, label: "Talent", link: "/talent" },
  { id: 4, label: "Industries", link: "/industry" },
  { id: 5, label: "Insights", link: "/insight" },
  { id: 6, label: "Company", link: "/company" },
];

export default function Footer() {
  return (
    <footer className="pt-5 pb-1 main-footer">
      <div className="container-fluid margin-code">
        <div className="row justify-content-between">
          <div className="mb-3 col-6 col-md-2">
            <ul className="nav flex-column">
              {footerData.map((item) => (
                <li key={item.id} className="mb-2 nav-item">
                  <NavLink
                    to={item.link}
                    className="p-2 nav-link"
                    reloadDocument
                  >
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
              We work From Strategy to Execution
            </p>
          </div>
        </div>

        <div className="py-4 my-4 d-flex flex-column flex-sm-row justify-content-between text-center border-top footer-last-text">
          <p>Copyright &copy; 2024 Inspiration Global | All rights reserved</p>
          <div className="d-flex justify-content-center align-item-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="130"
              height="130"
              viewBox="0 0 130 130"
              fill="none"
              className=""
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
          </div>
          <ul className="list-unstyled d-flex justify-content-center align-item-center">
            <li className="ms-lg-3">
              <NavLink
                className="link-body-emphasis"
                to="https://www.facebook.com/inspirationdigital1/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="footer-svg"
                >
                  <path d="M16.2 13.1L16.7 9.8H13.6V7.8C13.6 6.9 14 6 15.4 6H16.8V3.2C16.8 3.2 15.5 3 14.3 3C11.7 3 10 4.6 10 7.4V9.9H7.2V13.2H10V21H13.5V13.1H16.2Z" />
                </svg>
              </NavLink>
            </li>
            <li className="ms-lg-3">
              <NavLink
                className="link-body-emphasis"
                to="https://www.linkedin.com/company/inspiration-global/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  className="footer-svg"
                >
                  <path d="M4 6.19995H0.300003V18H4V6.19995Z" />
                  <path d="M4.3 2.1C4.3 1.8 4.2 1.5 4.1 1.3C4.1 1.1 3.9 0.8 3.7 0.6C3.5 0.4 3.3 0.3 3 0.2C2.8 0.1 2.5 0 2.2 0H2.1C1.6 0 1 0.2 0.6 0.6C0.2 1 0 1.6 0 2.1C0 2.7 0.2 3.2 0.6 3.6C1 4.1 1.6 4.3 2.1 4.3C2.4 4.3 2.7 4.3 2.9 4.2C3.2 4 3.5 3.9 3.7 3.7C3.9 3.5 4 3.3 4.1 3C4.2 2.8 4.3 2.5 4.3 2.1Z" />
                  <path d="M18 10.7999C18 7.2999 15.7 5.8999 13.5 5.8999C12.8 5.8999 12 5.9999 11.4 6.3999C10.7 6.6999 10.2 7.1999 9.8 7.7999H9.7V6.1999H6.2V17.9999H9.9V11.6999C9.8 11.0999 10 10.3999 10.5 9.8999C10.9 9.3999 11.5 9.0999 12.1 8.9999H12.2C13.4 8.9999 14.2 9.6999 14.2 11.5999V17.9999H18V10.7999Z" />
                </svg>
              </NavLink>
            </li>
          </ul>
          <p className="footer-final-text">Terms of Service</p>
          <p className="footer-final-text">Dei Policy</p>
        </div>
      </div>
    </footer>
  );
}
