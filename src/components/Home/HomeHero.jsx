import React from "react";
import avator from "../../assets/avator1.png";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-text-container">
        <h1 className="hero-title">Make a Difference Today!</h1>
        <p className="hero-quote">
          Your donation can change someone's life. Help us provide food, shelter
          and education to those in need today.
        </p>
        <Link to="/donation-form" className="hero-button">
          Donate Now
        </Link>
      </div>
      <img src={avator} alt="Avatar" className="hero-avatar" />
    </div>
  );
};

export default Hero;
