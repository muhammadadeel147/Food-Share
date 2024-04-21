import React from 'react';
import "./VolunteerSection.css"; 
import img from "../Assets/17.jpg"
import img1 from "../Assets/18.jpg"
const VolunteerSection = () => {
  const volunteers = [
    {
      id: 1,
      name: "Muhammad Adeel",
      role: "Food Distribution Volunteer",
      bio: "John is passionate about ensuring everyone has access to nutritious food. He volunteers his time to help distribute food to families in need.",
      image: img,
    },
    {
      id: 2,
      name: "Ahmed",
      role: "Event Coordinator Volunteer",
      bio: "Ahmed loves organizing events and believes in the power of community engagement. He volunteers to coordinate food drives and fundraising events.",
      image: img1,
    },

  ];

  return (
    <section className="volunteer-section">
      <div className="container">
        <h2 className="section-title">Become a Volunteer</h2>
        <p className="section-description">Join us in making a difference in the community by volunteering your time and skills.</p>
        <div className="volunteer-content">
          <div className="volunteer-opportunities">
            <h3>Volunteer Opportunities</h3>
            <p>Explore various volunteer roles available, from food distribution to event organization.</p>
            <a href="/" className="btn btn-primary">View Opportunities</a>
          </div>
          <div className="volunteer-profiles">
            {volunteers.map(volunteer => (
              <div key={volunteer.id} className="volunteer-profile">
                <img src={volunteer.image} alt={volunteer.name} />
                <div className="profile-info">
                  <h3>{volunteer.name}</h3>
                  <p>{volunteer.role}</p>
                  <p>{volunteer.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;
