import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="nav-item">Projects</li>
        <li className="nav-item">Resume</li>
        <li className="nav-item">Tech Stack</li>
        <li className="nav-item">Get in Touch</li>
      </ul>
    </nav>
  );
}

export default Navbar;
