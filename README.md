# UniThrift
College student marketplace React app
unithrift/
│
├── package.json
├── .gitignore
│
├── public/
│   ├── index.html
│   ├── favicon.ico
│
└── src/
    ├── index.js
    ├── index.css
    │
    ├── data/
    │   └── products.js
    │
    ├── pages/
        ├── App.js
        ├── Home.js
        ├── Browse.js
        ├── Product.js
        ├── SignUp.js
        ├── Movers.js
        └── About.js
  {
  "name": "unithrift",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.22.2",
    "react-scripts": "5.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build"
  }
}

node_modules
build
.env

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>UniThrift</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
</head>
<body>
  <div id="root"></div>
</body>
</html>

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  background-color: #f8f9fa;
  color: #333;
}

a {
  text-decoration: none;
  color: inherit;
}

nav {
  background-color: #0277BD;
  color: white;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
}

nav a {
  margin-left: 20px;
  font-weight: 600;
  transition: color 0.3s ease;
}

nav a:hover {
  color: #FFEB3B;
}

button {
  background-color: #00C853;
  border: none;
  color: white;
  padding: 10px 16px;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 8px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #009624;
}

.container {
  padding: 20px;
  max-width: 1100px;
  margin: auto;
}

.hero {
  background: linear-gradient(120deg, #00C853, #0277BD);
  color: white;
  padding: 60px 20px;
  text-align: center;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 6px;
}

form input {
  padding: 10px;
  margin: 8px 0;
  width: 100%;
  max-width: 400px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

footer {
  background-color: #0277BD;
  color: white;
  padding: 20px;
  text-align: center;
  margin-top: 40px;
}

body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  background-color: #f8f9fa;
  color: #333;
}

a {
  text-decoration: none;
  color: inherit;
}

nav {
  background-color: #0277BD;
  color: white;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
}

nav a {
  margin-left: 20px;
  font-weight: 600;
  transition: color 0.3s ease;
}

nav a:hover {
  color: #FFEB3B;
}

button {
  background-color: #00C853;
  border: none;
  color: white;
  padding: 10px 16px;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 8px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #009624;
}

.container {
  padding: 20px;
  max-width: 1100px;
  margin: auto;
}

.hero {
  background: linear-gradient(120deg, #00C853, #0277BD);
  color: white;
  padding: 60px 20px;
  text-align: center;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 6px;
}

form input {
  padding: 10px;
  margin: 8px 0;
  width: 100%;
  max-width: 400px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

footer {
  background-color: #0277BD;
  color: white;
  padding: 20px;
  text-align: center;
  margin-top: 40px;
}

const products = [
  {
    id: 1,
    name: "MacBook Air 2020",
    price: 650,
    college: "USC",
    distance: "2 miles",
    description: "Lightweight MacBook Air with M1 chip, perfect for students on the go.",
    image: "https://via.placeholder.com/300x200?text=MacBook+Air"
  },
  {
    id: 2,
    name: "Mini Fridge",
    price: 75,
    college: "UCLA",
    distance: "8 miles",
    description: "Compact fridge ideal for dorm rooms and small apartments.",
    image: "https://via.placeholder.com/300x200?text=Mini+Fridge"
  },
  {
    id: 3,
    name: "Economics 101 Textbook",
    price: 30,
    college: "USC",
    distance: "1 mile",
    description: "Lightly used Economics 101 textbook with minimal highlighting.",
    image: "https://via.placeholder.com/300x200?text=Economics+101"
  },
  {
    id: 4,
    name: "Dorm Sofa",
    price: 120,
    college: "Cal State LA",
    distance: "14 miles",
    description: "Comfortable dorm sofa in excellent condition, seats three.",
    image: "https://via.placeholder.com/300x200?text=Dorm+Sofa"
  },
  {
    id: 5,
    name: "Basketball Shoes",
    price: 50,
    college: "UCLA",
    distance: "9 miles",
    description: "High-quality basketball shoes, barely worn and great for play.",
    image: "https://via.placeholder.com/300x200?text=Basketball+Shoes"
  }
];

export default products;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Browse from './Browse';
import Product from './Product';
import SignUp from './SignUp';
import Movers from './Movers';
import About from './About';

function App() {
  return (
    <Router>
      <nav>
        <div><Link to="/" style={{ color: "white", fontWeight: "700", fontSize: "1.2rem" }}>UniThrift</Link></div>
        <div>
          <Link to="/browse">Browse</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/movers">Student Movers</Link>
          <Link to="/about">About Us</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/movers" element={<Movers />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <footer>
        <p>© {new Date().getFullYear()} UniThrift | Built for Students, By Students</p>
      </footer>
    </Router>
  );
}

export default App;

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="hero">
      <h1>Welcome to UniThrift</h1>
      <p>Buy, Sell, and Move — Only for College Students</p>
      <Link to="/browse"><button>Browse Listings</button></Link>
      <Link to="/signup" style={{ marginLeft: "10px" }}><button>Sign Up</button></Link>
    </div>
  );
}

export default Home;

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
            <p>{item.college} - {item.distance}</p>
            <Link to={`/product/${item.id}`}><button>View</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Browse;





