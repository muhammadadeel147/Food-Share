import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  const start = (
    <div className="p-d-flex p-align-center">
     
      <Link to="/" style={{ textDecoration: 'none', color: '#3f6846' }}>
        <h2 className="p-m-0">Food Share</h2>
      </Link>
    </div>
  );

  const end = (
    <div className="p-d-flex">
      <Link to="/login" className="p-mr-2">
        <Button label="Login" icon={<FontAwesomeIcon icon={faSignInAlt} />} className="p-button-text" />
      </Link>
      <Link to="/registration">
        <Button label="Sign Up" icon={<FontAwesomeIcon icon={faUserPlus} />} className="p-button-text p-button-primary" />
      </Link>
    </div>
  );

  return (
    <div className="navbar-container" style={{ backgroundColor: '#f7dfa5', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <Menubar start={start} end={end} />
    </div>
  );
};

export default Navbar;