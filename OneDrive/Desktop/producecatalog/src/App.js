// App.js
import React, { useState } from "react";
import ProductCatalog from "./components/ProductCatalog";
import OrderTracking from "./components/OrderTracking";
import Receipt from "./components/Receipt";
import Reports from "./components/Reports";

const App = () => {
  const [order, setOrder] = useState({ id: 1, items: [] });
  const [orders, setOrders] = useState([]);

  const handleAddToOrder = (product) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      items: [...prevOrder.items, product],
    }));
  };

  const handleConfirmOrder = () => {
    setOrders((prevOrders) => [...prevOrders, order]);
    setOrder({ id: order.id + 1, items: [] });
  };

  return (
    <div>
      <h1>E-commerce Order Management System</h1>
      <ProductCatalog onAddToOrder={handleAddToOrder} />
      <button onClick={handleConfirmOrder}>Confirm Order</button>
      <OrderTracking order={order} />
      <Receipt order={order} />
      <Reports orders={orders} />
    </div>
  );
};

export default App;
