import React from "react";
import "./News.css";

const NewsPostItem = ({ item }) => {
  return (
    <div className="post-item clearfix">
      <img className="news_image" src={item.img} alt="" />
      <h4 className="news_title">
        <a className="news_href" href="#">{item.title}</a>
      </h4>
      <p className="news_subtitle">{item.subtitle}</p>
    </div>
  );
};

export default NewsPostItem;
