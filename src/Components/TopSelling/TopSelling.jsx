import React, { useState } from "react";
import CardFilter from "../Card/CardFilter";
import Info from "../../../Api/info.json";

import "./TopSelling.css";
import TopSellingItem from "./TopSellingItem";

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
        <table className="table table-borderless">
          <thead className="table-light">
            <tr>
              <th scope="col">Preview</th>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Sales</th>
              <th scope="col">Revenue</th>
            </tr>
          </thead>
          <tbody>
            {Info.topselling?.map((item) => (
              <TopSellingItem key={item.id} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopSelling;
