import React, { useState } from "react";
import CardFilter from "../Card/CardFilter";
import "./TopSelling.css";

const TopSelling = () => {
  const [filter, setFilter] = useState("Today");
  const handleFilterChange = (filter) => {
    setFilter(filter);
  };
  return (
    <div className="card recent-sales overflow-auto">
      <CardFilter filterChange={handleFilterChange} />
      <div className="card-body pb-0">
        <h5 className="card-title">
          Top Selling <span>| {filter}</span>
        </h5>
      </div>
    </div>
  );
};

export default TopSelling;
