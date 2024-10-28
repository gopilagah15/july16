// OrderTracking.js
import React, { useState } from "react";

const OrderTracking = ({ order }) => {
  const [status, setStatus] = useState("Processing");

  const updateStatus = () => {
    if (status === "Processing") setStatus("Shipped");
    else if (status === "Shipped") setStatus("Delivered");
  };

  return (
    <div>
      <h2>Order Tracking</h2>
      <p>Order ID: {order.id}</p>
      <p>Status: {status}</p>
      <button onClick={updateStatus}>Update Status</button>
    </div>
  );
};

export default OrderTracking;
