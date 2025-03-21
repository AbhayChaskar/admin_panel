import React from "react";
import "./Main.css";
import DashboardTitle from "../DashboardTitle/DashboardTitle";
import Dashboard from "../Dashboard/Dashboard";

const Main = () => {
  return (
    <main id="main" className="main">
      <DashboardTitle page="Dashboard"/>
      <Dashboard/>
    </main>
  );
};

export default Main;
