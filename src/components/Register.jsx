import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import './Registration.css';
import { useNavigate } from 'react-router-dom';
const Registration = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); 
  const handleRegistration = async () => {
    navigate("/login")
  };


  return (
    <div className="registration-form">
      <h2>Register</h2>
      <div className="p-fluid">
        <div className="p-field">
          <label htmlFor="username">Username</label>
          <InputText id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>

        <div className="p-field">
          <label htmlFor="email">Email</label>
          <InputText id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="p-field">
          <label htmlFor="password">Password</label>
          <Password id="password" value={password} onChange={(e) => setPassword(e.target.value)} feedback={false} />
        </div>

        <div className="p-field">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <Password id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} feedback={false} />
        </div>

        <Button label="Register" icon="pi pi-check" onClick={handleRegistration} />
      </div>
    </div>
  );
};

export default Registration;
