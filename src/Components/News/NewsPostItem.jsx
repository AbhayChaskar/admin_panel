import React from "react";
import "./News.css";

const NewsPostItem = ({ item }) => {
  return (
    <div className="post-item clearfix">
      <img src={item.img} alt="" />
      <h4>
        <a href="#">{item.title}</a>
      </h4>
      <p>{item.subtitle}</p>
    </div>
  );
};

export default NewsPostItem;
