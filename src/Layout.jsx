import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Homepage/index.js";

export default function Layout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}
