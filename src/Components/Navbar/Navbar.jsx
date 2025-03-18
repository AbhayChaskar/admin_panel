import React from "react";
import "./Navbar.css";
import NavNoti from "./NavNoti";
import NavMessage from "./NavMessage";
import NavAvatar from "./NavAvatar";

const Navbar = () => {
  return (
    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">
        <NavNoti />
        <NavMessage/>
        <NavAvatar/>
      </ul>
    </nav>
  );
};

export default Navbar;
