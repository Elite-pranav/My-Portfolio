import React from 'react'; // Import React library
import './Hero.css'; // Import CSS for styling
import profileImg from '../assets/profile.jpg'; // Import profile image

const Hero = () => { // Define Hero functional component
  return (
    <section className="hero"> {/* Main hero section container */}
      <div className="hero-left"> {/* Left side of hero section */}
        <img src={profileImg} alt="Profile" className="profile-pic" /> {/* Profile image */}
      </div>
      <div className="hero-right"> {/* Right side of hero section */}
        <h1 className="name">Pranav Malvi</h1> {/* Name/title */}
        <p className="about">
          {/* About/description text */}
          Energetic and ambitious student pursuing a B.Tech degree with a passion for Information Technology. Demonstrated proficiency in
          Java, C++ and Python languages. Proactive learner with a keen ability to adapt to new challenges. Excited to apply academic
          knowledge in a practical setting and contribute positively. Interested and actively working in the AI, Machine Learning, and Generative
          AI domains.
        </p>
      </div>
    </section>
  );
};

export default Hero; // Export