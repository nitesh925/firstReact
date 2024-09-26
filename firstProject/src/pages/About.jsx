import React from 'react';
import '../styles/About.css'; // Import the About page CSS

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Our Developer Matchmaking App</h1>
      <p className="about-description">
        Our matchmaking app is designed specifically for developers, helping them find collaborators, mentors, and project partners based on their skills and interests. Whether you're into front-end, back-end, AI, or any other tech field, we connect you with like-minded individuals to build amazing projects together.
      </p>
      <h2 className="about-subheading">How It Works</h2>
      <ul className="about-list">
        <li>Sign up and create a profile highlighting your skills and interests.</li>
        <li>Explore potential matches based on similar skills, programming languages, or projects.</li>
        <li>Collaborate with developers on open-source projects or new ideas.</li>
      </ul>
      <h2 className="about-subheading">Why Use Our App?</h2>
      <p className="about-description">
        In today's tech world, collaboration is key. Whether you're a student, a freelancer, or a seasoned developer, finding the right people to work with can unlock new opportunities, improve your skills, and bring your ideas to life. Our platform is a hub for developers to connect and grow together.
      </p>
    </div>
  );
};

export default About;
