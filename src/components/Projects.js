import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="project-card">
        <h2>PESTEL Analysis (Sponsored Ongoing Project by CREATUM Company, Germany)

            
            </h2>
            
        <p>Currently working on an industry-sponsored project: AI-Driven PESTEL Tool, designed to analyze Political, Economic, Social,
            Technological, Environmental, and Legal factors using AI agents. The tool leverages multi-agent systems, natural language
            processing, and machine learning to provide actionable insights for strategic decision-making.</p>
            <p>Tech Stack: Python, Flask, NLP Libraries, Machine Learning Frameworks, Microsoft AutoGen, Azure OpenAI Services.<br />
            Responsibilities: Contributing to the development of PESTEL-specific agents, backend infrastructure, and model implementation.</p>
      </div>
      <div className="project-card">
        <h2>AI-based Exam Proctoring System (Internship Project by EduPlus Company)</h2>
        <p>Collaborated with EduPlus to develop an AI-based proctoring system for online exams, detecting suspicious activities such as
        prohibited speech, facial movements, and screen sharing. Integrated machine learning models for face detection, speech
        recognition.
        </p>
        <p>Tech Stack: Python, Flask, Mediapipe, KeyBERT, TensorFlow, OpenCV, SpeechRecognition
            <br />Responsibilities: Worked on audio feature development and Backend Integration.
        </p>
      </div>
    </section>
  );
};

export default Projects;
