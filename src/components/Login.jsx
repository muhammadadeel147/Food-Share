import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import './Login.css';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 
  const handleLogin = async () => {
    navigate("/")
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <div className="p-fluid">
        <div className="p-field">
          <label htmlFor="email">Email</label>
          <InputText id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="p-field">
          <label htmlFor="password">Password</label>
          <Password id="password" value={password} onChange={(e) => setPassword(e.target.value)} feedback={false} />
        </div>

        <Button label="Login" icon="pi pi-sign-in" onClick={handleLogin} />
      </div>
    </div>
  );
};

export default Login;
