
import React from 'react';
import './AboutUs.css';
import img from "../Assets/2.jpg"
const AboutUs = () => {
  return (
    <div className="about-us-section">
      <div className="about-us-content">
        <div className="about-us-text">
          <h2>About Us</h2>
          <p>
          Food Share is a passionate community dedicated to addressing the issue of food loss and ensuring that no one goes to bed hungry. Our mission is to rescue surplus food and distribute it to those in need. We believe in making a positive impact on society by providing nutritious meals and reducing food waste.
          </p>
          <p>
            Every day, millions of people around the world struggle with hunger, while a significant amount of food is wasted. At Food Savior, we are committed to bridging this gap and creating a world where everyone has access to an ample and healthy food supply.
          </p>
        </div>
        <div className="about-us-image">
       <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
