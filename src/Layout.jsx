import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer.jsx";
import "aos/dist/aos.css";
import OffcanvasNavbar from "./components/header/OffCanvasHeader.jsx";

export default function Layout() {
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
