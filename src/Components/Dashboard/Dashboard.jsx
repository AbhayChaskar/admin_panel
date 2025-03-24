import React from "react";
import "./Dashboard.css";
import Cards from "../Card/Cards";
import Reports from "../Reports/Reports";

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
          </div>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </section>
  );
};

export default Dashboard;
