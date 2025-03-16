import React, { useState } from "react";
import "./Logo.css";

const Logo = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarVisible(true);
  };

  return (
    <div className="d-flex align-items-center justify-content-between">
      <a href="/" className="logo d-flex align-items-center">
        <span className="d-none d-lg-block">Admin Panel</span>
      </a>
      <i className={`bi bi-list toggle-sidebar-btn ${isSidebarVisible ? "show-sidebar" : ""}`} onClick={handleToggleSidebar}> </i>
    </div>
  );
};

export default Logo;
