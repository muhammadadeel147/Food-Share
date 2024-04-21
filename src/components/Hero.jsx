import React from 'react'
import "./Hero.css"
import img from "../Assets/1.jpeg"
import { Button } from 'primereact/button'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div>
   <div className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Donate Food to Save Lives</h1>
          <p>Your contribution can make a difference. Help us in our mission to ensure everyone has access to nutritious food.</p>
          <Link to="/donate">
          <Button label="Donate Now" icon="pi pi-heart" className="p-button-primary" />
      </Link>    
        </div>
        <div className="hero-image">
          <img src={img} alt="Food Donation" />
        </div>
      </div>
    </div></div>
  )
}

export default Hero