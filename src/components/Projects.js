import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="project-card">
        <h2>Project 1: Portfolio Website</h2>
        <p>A personal portfolio site built with React to showcase my work and skills.</p>
      </div>
      <div className="project-card">
        <h2>Project 2: Quiz App</h2>
        <p>A React app that quizzes users on various topics with a scoring system.</p>
      </div>
    </section>
  );
};

export default Projects;
