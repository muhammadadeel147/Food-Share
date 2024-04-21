
import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';

import './DonateNow.css'; 
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { Button } from 'primereact/button';
const DonateNow = () => {
  const [foodName, setFoodName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [donorName, setDonorName] = useState('');
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
 const navigate=useNavigate();
  const handleSubmit = () => {
   
    toast.success('Donation successful!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setTimeout(() => {
      navigate('/');
    }, 3000);
  
    console.log('Donation Data:', { foodName, quantity, donorName, country, region });
  };

  return (
    <div className="donate-now-container">
           <h1>Donate Now</h1>

      <div className="p-field">
        <label htmlFor="foodName">Food Name</label>
        <InputText
          id="foodName"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
        />
      </div>

      <div className="p-field">
        <label htmlFor="quantity">Quantity</label>
        <InputText
          id="quantity"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>

      <div className="p-field">
        <label htmlFor="donorName">Donor Name</label>
        <InputText
          id="donorName"
          value={donorName}
          onChange={(e) => setDonorName(e.target.value)}
        />
      </div>
      <div className="p-field">
        <label htmlFor="country">Country</label>
        <CountryDropdown
          id="country"
          value={country}
          onChange={(val) => setCountry(val)}
          className="country-dropdown" 
        />
      </div>

      <div className="p-field">
        <label htmlFor="region">Region</label>
        <RegionDropdown
          id="region"
          country={country}
          value={region}
          onChange={(val) => setRegion(val)}
          className="region-dropdown" 
        />
      </div>

      <Button label="Submit Donation" icon="pi pi-heart" onClick={handleSubmit} />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar newestOnTop closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
};

export default DonateNow;