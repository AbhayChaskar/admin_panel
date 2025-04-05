import React, { useState } from "react";
import CardFilter from "../Card/CardFilter";
import WebTrafficCharts from "./WebTrafficCharts";

const WebTraffic = () => {
  const [filter, setFilter] = useState("Today");
  const handleFilterChange = (filter) => {
    setFilter(filter);
  };
  return (
    <div className="card">
      <CardFilter filterChange={handleFilterChange} />
      <div className="card-body pb-0">
        <h5 className="card-title">
          Website Traffic <span>| {filter}</span>
        </h5>
        <WebTrafficCharts/>
      </div>
    </div>
  );
};

export default WebTraffic;
