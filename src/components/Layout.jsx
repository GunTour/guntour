import React from "react";
import Footer from "components/Footer";
import { NavbarLogin } from "components/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <NavbarLogin />
      <div className="w-full h-full">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
