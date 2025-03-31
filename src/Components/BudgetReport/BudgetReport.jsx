import React, { useState } from "react";
import CardFilter from "../Card/CardFilter";
import BudgetCharts from "./BudgetCharts";

const BudgetReport = () => {
  const [filter, setFilter] = useState("Today");
  const handleFilterChange = (filter) => {
    setFilter(filter);
  };
  return (
    <div className="card">
      <CardFilter filterChange={handleFilterChange} />
      <div className="card-body pb-0">
        <h5 className="card-title">
          Budget Report <span>| {filter}</span>
        </h5>
        <BudgetCharts/>
      </div>
    </div>
  );
};

export default BudgetReport;
