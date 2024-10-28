// Reports.js
import React from "react";

const Reports = ({ orders }) => {
  const calculateTotalRevenue = () => {
    return orders.reduce((total, order) => {
      return total + order.items.reduce((subtotal, item) => subtotal + item.price, 0);
    }, 0);
  };

  return (
    <div>
      <h2>Reports</h2>
      <p>Total Revenue: ${calculateTotalRevenue()}</p>
      <p>Total Orders: {orders.length}</p>
    </div>
  );
};

export default Reports;
