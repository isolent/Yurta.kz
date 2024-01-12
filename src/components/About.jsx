import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'
function About() {
  return (
    <div className="about-us">
        <h3>About Us</h3>
        <p>Welcome to our website, your ideal 
          partner in the search and rental of housing. 
          We are a reliable and experienced guide in the 
          world of real estate, providing you with a 
          wide selection of apartments and houses for rent.
        </p>
        <h3>Our mission</h3>
        <p>Our values are rooted in providing the best 
          services and meeting the needs of our customers. 
          We strive to make the search and rental of real 
          estate a simple and convenient process by providing 
          information about the most relevant objects on the market. 
          Our goal is to make your home a place where you feel at home.
          </p>
        <h3>Our advantages</h3>
        <p>Large selection: We offer a variety of apartments and houses so that you can find what suits your needs and budget.
          Reliability: We cooperate only with trusted agents and property owners to ensure your safety and comfort.
          Simple search: Our convenient search allows you to easily find accommodation by various parameters, including price and number of rooms.
        </p>
    </div>
  );
}

export default About;
