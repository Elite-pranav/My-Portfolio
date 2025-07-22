import React from 'react';
import './Resume.css';
import resumePDF from '../assets/Pranav_Malvi_TY2026.pdf';

const Resume = () => {
  return (
    <div className="section resume">
      <h2>My Resume</h2>
      <p>You can download my resume below.</p>

      <a href={resumePDF} download className="download-button">
        📄 Download Resume
      </a>
    </div>
  );
};

export default Resume;
