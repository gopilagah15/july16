// ProductCatalog.js
import React from "react";

const ProductCatalog = ({ onAddToOrder }) => {
  const products = [
    { id: 1, name: "Product A", price: 50 },
    { id: 2, name: "Product B", price: 100 },
    { id: 3, name: "Product C", price: 150 },
  ];

  return (
    <div>
      <h2>Product Catalog</h2>
      {products.map((product) => (
        <div key={product.id}>
          <span>{product.name} - ${product.price}</span>
          <button onClick={() => onAddToOrder(product)}>Add to Order</button>
        </div>
      ))}
    </div>
  );
};

export default ProductCatalog;
