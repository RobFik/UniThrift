import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';

function Product() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id, 10));

  if (!product) return <div className="container">Product not found</div>;

  const buy = () => {
    alert("Purchase confirmed, payment is held securely until delivery is confirmed");
  };

  return (
    <div className="container">
      <img src={product.image} alt={product.name} style={{ width: "300px", borderRadius: "8px" }} />
      <h2>{product.name}</h2>
      <p style={{ fontSize: "1.25rem", fontWeight: 600 }}>${product.price}</p>
      <p>{product.college} , {product.distance}</p>
      <p>{product.description}</p>
      <button onClick={buy}>Buy Now</button>
      <p style={{ marginTop: 10, fontSize: ".9rem", color: "#666" }}>
        Seller contact info stays private until after purchase to keep deals on platform.
      </p>
    </div>
  );
}

export default Product;
