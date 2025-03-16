import React from "react";
import "./Header.css";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <div id="header" className="header fixed-top d-flex align-items-center">
      <Logo/>
    </div>
  );
};

export default Header;
