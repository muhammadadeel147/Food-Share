import React, { useEffect, useState } from 'react';
import './VideoSection.css';
import img from '../Assets/6.jpg'; 
import { motion } from 'framer-motion';

const VideoSection = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const elementOffset = document.querySelector('.video-section').offsetTop;

      if (scrollTop > elementOffset - window.innerHeight / 2) {
        setIsAnimated(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="video-section">
      <motion.div 
        className="video-container"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: isAnimated ? 1 : 0, x: isAnimated ? 0 : -50 }}
        transition={{ duration: 1 }}
      >
        <img
          src={img} 
          alt="Placeholder Image"
          width="640"
          height="360" 
          className="video-image"
        />
      </motion.div>
      <motion.div 
        className="info-section"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: isAnimated ? 1 : 0, x: isAnimated ? 0 : 50 }}
        transition={{ duration: 1 }}
      >
        <h2>Why Donate Food?</h2>
        <p>
          Hunger is a critical issue affecting millions of people worldwide, with children being particularly vulnerable. Many families struggle to secure regular meals, leading to severe health consequences and hindering the potential of young minds.
        </p>
        <p>
          By donating food, you play a vital role in addressing this humanitarian crisis. Your contributions not only provide sustenance but also contribute to the reduction of food waste. Together, we can ensure that everyone, regardless of their circumstances, has access to nutritious meals, fostering healthier communities and brighter futures.
        </p>
      </motion.div>
    </div>
  );
};

export default VideoSection;
