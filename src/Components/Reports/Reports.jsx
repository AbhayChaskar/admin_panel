import React, { useState } from "react";
import "./Reports.css";
import CardFilter from "../Card/CardFilter";

const Reports = () => {
  const [filter, setFilter] = useState("Today");
  const handleFilterChange = (filter) => {
    setFilter(filter);
  };
  return (
    <div className="card">
      <CardFilter filterChange={handleFilterChange} />
      <div className="card-body">
        <h5 className="card-title">
          Reports <span>| {filter}</span>
        </h5>
      </div>
    </div>
  );
};

export default Reports;
