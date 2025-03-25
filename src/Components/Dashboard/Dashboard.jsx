import React from "react";
import "./Dashboard.css";
import Cards from "../Card/Cards";
import Reports from "../Reports/Reports";
import RecentSales from "../RecentSales/RecentSales";
import TopSelling from "../TopSelling/TopSelling";

const Dashboard = () => {
  return (
    <section className="dashboard section">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            <Cards />
            <div className="col-12">
              <Reports />
            </div>
            <div className="col-12">
              <RecentSales />
            </div>
            <div className="col-12">
              <TopSelling/>
            </div>
          </div>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </section>
  );
};

export default Dashboard;
