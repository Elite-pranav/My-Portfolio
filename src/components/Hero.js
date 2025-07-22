import React from 'react';
import './Hero.css';
import profileImg from '../assets/profile.jpg'; // Add your image in src/assets/

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <img src={profileImg} alt="Profile" className="profile-pic" />
      </div>
      <div className="hero-right">
        <h1 className="name">Pranav Malvi</h1>
        <p className="about">
          I'm a passionate developer with experience in building modern web applications. I enjoy crafting beautiful, responsive, and accessible front-end experiences. Currently exploring the React ecosystem and building exciting UI projects.
        </p>
      </div>
    </section>
  );
};

export default Hero;
