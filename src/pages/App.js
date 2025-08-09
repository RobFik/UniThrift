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
        <div>
          <Link to="/" style={{ color: "white", fontWeight: "700", fontSize: "1.2rem" }}>
            UniThrift
          </Link>
        </div>
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
        <p>© {new Date().getFullYear()} UniThrift, Built for Students, By Students</p>
      </footer>
    </Router>
  );
}

export default App;
