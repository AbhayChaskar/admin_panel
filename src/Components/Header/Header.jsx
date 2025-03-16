import React from "react";
import "./Header.css";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div id="header" className="header fixed-top d-flex align-items-center">
      <Logo/>
      <SearchBar/>
      <Navbar/>
    </div>
  );
};

export default Header;
