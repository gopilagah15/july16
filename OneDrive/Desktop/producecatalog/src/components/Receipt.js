// Receipt.js
import React from "react";

const Receipt = ({ order }) => {
  if (!order) return null;

  const calculateTotal = () => {
    const subtotal = order.items.reduce((total, item) => total + item.price, 0);
    const tax = subtotal * 0.1; // Assuming 10% tax
    return subtotal + tax;
  };

  return (
    <div>
      <h2>Receipt</h2>
      <p>Order ID: {order.id}</p>
      <ul>
        {order.items.map((item) => (
          <li key={item.id}>{item.name} - ${item.price}</li>
        ))}
      </ul>
      <p>Total: ${calculateTotal()}</p>
    </div>
  );
};

export default Receipt;
