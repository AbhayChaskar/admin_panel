import React from "react";
import Info from "../../../Api/info.json";

const RecentSalesTables = () => {
  const handleStatus = (status) => {
    switch (status) {
      case "Approved":
        return "success";
        break;
      case "Pending":
        return "warning";
        break;
      case "Rejected":
        return "danger";
        break;
      default:
        return "success";
    }
  };

  return (
    <table className="table table-borderless datatable">
      <thead className="table-light">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Customer</th>
          <th scope="col">Product</th>
          <th scope="col">Price</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {Info.recentsales?.map((items) => (
          <tr key={items.id}>
            <th scope="row">
              <a href="#" className="text-decoration-none">{items.number}</a>
            </th>
            <td>{items.customer}</td>
            <td>
              <a href="#" className="text-primary text-decoration-none">
                {items.product}
              </a>
            </td>
            <td>${items.price.toFixed(2)}</td>
            <td>
              <span className={`badge bg-${handleStatus(items.status)}`}>
                {items.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RecentSalesTables;
