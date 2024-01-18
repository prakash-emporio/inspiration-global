import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer.jsx";
import MegaHeader from "./components/header/MegaHeader.jsx";

export default function Layout() {
  return (
    <div className="d-grid">
      <MegaHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
