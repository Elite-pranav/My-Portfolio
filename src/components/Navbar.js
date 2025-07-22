import React from 'react';
import './Navbar.css';

const Navbar = ({ setActiveSection }) => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li onClick={() => setActiveSection('home')}>Home</li>
        <li onClick={() => setActiveSection('projects')}>Projects</li>
        <li onClick={() => setActiveSection('techstack')}>TechStack</li>
        <li onClick={() => setActiveSection('resume')}>Resume</li>
        {/* Add more like Resume, Contact later */}
        {/* Add more like Resume, Tech Stack later */}
      </ul>
    </nav>
  );
};


export default Navbar;
