import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="hero">
      <h1>Welcome to UniThrift</h1>
      <p>Buy, Sell, and Move, only for College Students</p>
      <Link to="/browse"><button>Browse Listings</button></Link>
      <Link to="/signup" style={{ marginLeft: "10px" }}><button>Sign Up</button></Link>
    </div>
  );
}

export default Home;
