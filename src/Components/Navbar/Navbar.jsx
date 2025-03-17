import React from "react";
import "./Navbar.css";
import NavNoti from "./NavNoti";

const Navbar = () => {
  return (
    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">
        <NavNoti />
      </ul>
    </nav>
  );
};

export default Navbar;
