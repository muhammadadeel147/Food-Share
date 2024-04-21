import React from 'react';
import "./FeaturedCauses.css"; 
import img from "../Assets/15.jpg"
import img1 from "../Assets/16.jpg"
const FeaturedCauses = () => {
  const featuredCauses = [
    {
      id: 1,
      title: "Community Kitchen Project",
      description: "Support our community kitchen initiative to provide hot meals for the homeless.",
      image: img,
      link: "/causes/community-kitchen"
    },
    {
      id: 2,
      title: "School Lunch Program",
      description: "Help us ensure every child has access to nutritious meals at school.",
      image: img1,
      link: "/causes/school-lunch-program"
    },

  ];

  return (
    <section className="featured-causes-section">
      <div className="container">
        <h2>Featured Causes</h2>
        <div className="row">
          {featuredCauses.map(cause => (
            <div key={cause.id} className="col-md-4">
              <div className="cause-card">
                <img src={cause.image} alt={cause.title} style={{ width: '30%', height: 'auto' }} />
                <div className="cause-info">
                  <h3>{cause.title}</h3>
                  <p>{cause.description}</p>
                  <a href={cause.link} className="btn">Learn More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCauses;
