import React from "react";
import "./Hero.css";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Life in Color</h2>
        <div>
          <div className="hero-hand-icon">
            
            
          </div>
          <p>2025</p>
          <p>XTRA EDITION</p>
        </div>
          
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
