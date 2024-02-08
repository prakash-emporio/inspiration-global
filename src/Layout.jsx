import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer.jsx";
import MegaHeader from "./components/header/MegaHeader.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Layout() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <MegaHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
