import React from "react";
import logo from "/logo.png";
import phone from "/phone.png";
import { NavLink } from "react-router-dom";

const navItems = [
  { id: 1, label: "Software & Services", href: "#" },
  { id: 2, label: "Talent", href: "/talent" },
  { id: 3, label: "Industries", href: "/industry" },
  { id: 4, label: "Insights", href: "#" },
  { id: 5, label: "Company", href: "#" },
];

export default function Header() {
  
  return (
    <nav className="flex justify-around bg-transparent">
      <NavLink to="/">
        <img className="px-10 py-10" src={logo} alt="company-logo" />
      </NavLink>  
      <ul className="flex">
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.href}
            className="px-10 py-10 font-medium text-white uppercase hover:text-lime-300"
          >
            {item.label}
          </NavLink>
        ))}
        <img className="w-5 h-5 mt-10" src={phone} alt="mobile-phone-logo" />
        <a
          href="#"
          className="px-5 py-10 font-semibold text-white uppercase hover:text-lime-300"
        >
          123.456.789
        </a>
      </ul>
    </nav>
  );
}
