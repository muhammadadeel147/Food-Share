
import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './DonationSection.css';
import { useNavigate } from 'react-router-dom';
import img from "../Assets/8.jpg"
import img1 from "../Assets/9.jpg"
import img3 from "../Assets/10.jpg"
import img4 from "../Assets/11.jpg"
import img5 from "../Assets/12.jpg"
import img6 from "../Assets/13.jpg"

const DonationSection = () => {
  const navigate=useNavigate();
  const handleSubmit = () => {
    
  
      navigate('/donate');
   
  
    
  };
    const items = [
      {
        id: 1,
        name: 'Wheat',
        description: 'Donate non-perishable canned goods to help those in need.',
        imageUrl: img,
      },
      {
        id: 2,
        name: 'Meat',
        description: 'Provide fresh fruits and vegetables to promote a healthy diet.',
        imageUrl: img1,
      },
      {
        id: 3   ,
        name: 'Sugar',
        description: 'Provide fresh fruits and vegetables to promote a healthy diet.',
        imageUrl: img3,
      },
      {
        id: 4,
        name: 'Bread',
        description: 'Provide fresh fruits and vegetables to promote a healthy diet.',
        imageUrl: img4,
      },
      {
        id: 2,
        name: 'Rice',
        description: 'Provide fresh fruits and vegetables to promote a healthy diet.',
        imageUrl: img5,
      },
      {
        id: 2,
        name: 'Water',
        description: 'Provide fresh fruits and vegetableiet.',
        imageUrl: img6,
      },
   
    ];
  
    return (
      <div className="donation-section">
        <h2>Some Donation Items</h2>
        <h4>Save some Lives</h4>
        <div className="donation-items-grid">
          {items.map((item) => (
            <div key={item.id} className="donation-item">
              <Card title={item.name}>
                <div className="donation-item-content">
                  <img src={item.imageUrl} alt={item.name} className="donation-item-image" style={{ width: '50%', height: 'auto' }}/>
                  <p>{item.description}</p>
                </div>
                <Button label="Donate" icon="pi pi-heart" className="p-button-primary" onClick={handleSubmit} />
                   </Card>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default DonationSection;
