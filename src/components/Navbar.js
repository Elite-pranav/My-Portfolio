import React from 'react'; // Import React library
import './Navbar.css'; // Import Navbar CSS for styling

const Navbar = ({ setActiveSection }) => { // Define Navbar component, receive setActiveSection as prop
  return (
    <nav className="navbar"> {/* Navbar container */}
      <ul className="nav-links"> {/* Navigation links list */}
        <li onClick={() => setActiveSection('home')}>Home</li> {/* Home link, sets active section to 'home' on click*/}
        <li onClick={() => setActiveSection('projects')}>Projects</li> {/*Projects link, sets active section to 'projects' on click*/}
        <li onClick={() => setActiveSection('techstack')}>TechStack</li> {/*TechStack link, sets active section to 'techstack' on click*/}
        <li onClick={() => setActiveSection('resume')}>Resume</li> {/*Resume link, sets active section to 'resume' on click*/}
        {/* Add more like Resume, Contact later */} {/*Placeholder for future links*/}
        {/* Add more like Resume, Tech Stack later */} {/*Placeholder for future links*/}
      </ul>
    </nav>
  );
};

export default Navbar; //