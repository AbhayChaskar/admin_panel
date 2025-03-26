import React from "react";
import "./TopSelling.css";

const TopSellingItem = ({ item }) => {
  return (
    <tr className="salesTable">
      <th scope="row" className="salesThead">
        <a href="#">
          <img className="top-selling-img" src={item.preview} alt="" />
        </a>
      </th>
      <td className="salesTbody">
        <a href="#" className="text-primary fw-bold text-decoration-none">
          {item.name}
        </a>
      </td>
      <td>${item.price.toFixed(2)}</td>
      <td className="fw-bold">{item.sales}</td>
      <td>${(item.price * item.sales).toLocaleString("en-US")}</td>
    </tr>
  );
};

export default TopSellingItem;
