import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import '../index.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <svg width="28" height="28" viewBox="0 0 120 260" style={{ transform: 'rotate(-15deg)' }}>
            <defs>
              <linearGradient id="navNose" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#c0d4f0" />
                <stop offset="100%" stopColor="#e8f2ff" />
              </linearGradient>
              <linearGradient id="navBody" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#c8d8f0" />
                <stop offset="40%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#a0bce0" />
              </linearGradient>
              <linearGradient id="navFin" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FF8C35" />
                <stop offset="100%" stopColor="#c94a10" />
              </linearGradient>
            </defs>
            <path d="M60,8 Q44,18 40,70 L80,70 Q76,18 60,8 Z" fill="url(#navNose)" />
            <rect x="38" y="68" width="44" height="105" rx="5" fill="url(#navBody)" />
            <rect x="38" y="112" width="44" height="10" rx="2" fill="#FF6B35" opacity="0.75" />
            <circle cx="60" cy="93" r="15" fill="#00b8e0" opacity="0.8" />
            <path d="M38,140 L14,182 L38,168 Z" fill="url(#navFin)" />
            <path d="M82,140 L106,182 L82,168 Z" fill="url(#navFin)" />
          </svg>
          Growth<span className="logo-ai">AI</span>
        </Link>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/contact" className="nav-cta">Get Started</Link>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="nav-logo">
              <svg width="22" height="22" viewBox="0 0 120 260" style={{ transform: 'rotate(-15deg)' }}>
                <defs>
                  <linearGradient id="footNose" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#c0d4f0" />
                    <stop offset="100%" stopColor="#e8f2ff" />
                  </linearGradient>
                  <linearGradient id="footBody" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#c8d8f0" />
                    <stop offset="40%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#a0bce0" />
                  </linearGradient>
                  <linearGradient id="footFin" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FF8C35" />
                    <stop offset="100%" stopColor="#c94a10" />
                  </linearGradient>
                </defs>
                <path d="M60,8 Q44,18 40,70 L80,70 Q76,18 60,8 Z" fill="url(#footNose)" />
                <rect x="38" y="68" width="44" height="105" rx="5" fill="url(#footBody)" />
                <rect x="38" y="112" width="44" height="10" rx="2" fill="#FF6B35" opacity="0.75" />
                <circle cx="60" cy="93" r="15" fill="#00b8e0" opacity="0.8" />
                <path d="M38,140 L14,182 L38,168 Z" fill="url(#footFin)" />
                <path d="M82,140 L106,182 L82,168 Z" fill="url(#footFin)" />
              </svg>
              Growth<span className="logo-ai">AI</span>
            </div>
            <p>
              AI-powered growth consulting for companies ready to reach their next orbit.
              We combine human expertise with machine intelligence to build growth engines that compound.
            </p>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <Link to="/services">AI Growth Strategy</Link>
            <Link to="/services">Revenue Acceleration</Link>
            <Link to="/services">Predictive Analytics</Link>
            <Link to="/services">Market Expansion</Link>
            <Link to="/services">AI Automation</Link>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <Link to="/about">About Us</Link>
            <Link to="/about">Our Team</Link>
            <Link to="/contact">Careers</Link>
            <Link to="/contact">Press</Link>
          </div>

          <div className="footer-col">
            <h4>Get in Touch</h4>
            <Link to="/contact">Book a Call</Link>
            <Link to="/contact">Contact Us</Link>
            <a href="mailto:hello@growthai.com">hello@growthai.com</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} GrowthAI Consulting. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/contact">Privacy Policy</Link>
            <Link to="/contact">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
