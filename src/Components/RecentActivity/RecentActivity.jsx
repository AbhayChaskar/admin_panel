import React, { useState } from "react";
import CardFilter from "../Card/CardFilter";
import Info from "../../../Api/info.json";
import RecentActivityItem from "./RecentActivityItem";

const RecentActivity = () => {
  const [filter, setFilter] = useState("Today");
  const handleFilterChange = (filter) => {
    setFilter(filter);
  };
  return (
    <div className="card">
      <CardFilter filterChange={handleFilterChange} />
      <div className="card-body">
        <h5 className="card-title">
          Recent Activity <span>| {filter}</span>
        </h5>
        <div className="activity">
          {Info.recentactivity?.map((item) => (
            <RecentActivityItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
