import { Outlet } from "react-router-dom";
import Footer  from "./components/footer/Footer.jsx";

export default function Layout() {
  return (
    <div className="flex flex-wrap content-between min-h-screen">
      <div className="block w-full">
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
