import React, { useState } from "react";
import CardFilter from "../Card/CardFilter";
import RecentSalesTables from "./RecentSalesTables";

const RecentSales = () => {
  const [filter, setFilter] = useState("Today");
  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  return (
    <div className="card recent-sales overflow-auto">
      <CardFilter filterChange={handleFilterChange} />
      <div className="card-body">
        <h5 className="card-title">
          Recent Sales <span>| {filter}</span>
        </h5>
        <RecentSalesTables />
      </div>
    </div>
  );
};

export default RecentSales;
