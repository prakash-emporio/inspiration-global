import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import OffcanvasNavbar from "./components/header/OffCanvasHeader.jsx";

export default function Layout() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <OffcanvasNavbar/>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
