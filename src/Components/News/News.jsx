import React, { useState } from "react";
import CardFilter from "../Card/CardFilter";
import NewsPostItem from "./NewsPostItem";
import Info from "../../../Api/info.json";

const News = () => {
  const [filter, setFilter] = useState("Today");
  const handleFilterChange = (filter) => {
    setFilter(filter);
  };
  return (
    <div className="card">
      <CardFilter filterChange={handleFilterChange} />
      <div className="card-body pb-0">
        <h5 className="card-title">
          News &amp; Updates <span>| {filter}</span>
        </h5>
        <div className="news">
          {Info.news?.map((item) => (
            <NewsPostItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
