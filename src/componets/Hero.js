import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="image-container">
        <img
          src="../images/LandingpageImg.svg"
          alt="homepage-img"
        />
      </div>
      <div>
        <h1 className="hero--header">Online Experiences</h1>
        <p className="hero--text">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
};

export default Hero;