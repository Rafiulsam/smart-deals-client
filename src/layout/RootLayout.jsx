import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const RootLayout = () => {
  return (
    <div>
      <ScrollRestoration></ScrollRestoration>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
