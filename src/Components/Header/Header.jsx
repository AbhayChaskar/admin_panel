import React from "react";
import "./Header.css";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  return (
    <div id="header" className="header fixed-top d-flex align-items-center">
      <Logo/>
      <SearchBar/>
    </div>
  );
};

export default Header;
