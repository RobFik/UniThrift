import React from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products';

function Browse() {
  return (
    <div className="container">
      <h2>Browse Listings</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "15px" }}>
        {products.map(item => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <p>{item.college} , {item.distance}</p>
            <Link to={`/product/${item.id}`}><button>View</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Browse;
