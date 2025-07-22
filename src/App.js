import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Resume from './components/Resume';


import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <>
      <Navbar setActiveSection={setActiveSection} />
      <div className="main-content">
        {activeSection === 'home' && <Hero />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'techstack' && <TechStack />}
        {activeSection === 'resume' && <Resume />}

      </div>
    </>
  );
}

export default App;
