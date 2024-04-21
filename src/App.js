import { Route, Router, Routes } from 'react-router-dom';
import './App.css';

import Login from './components/Login';

import Registration from './components/Register';
import Main from './components/Main';
import Navbar from './components/Navbar';
import DonateNow from './components/DonateNow';

function App() {
  return (
    <div className="App">
   <Navbar/>
      <Routes>
        <Route path="/" exact element={<Main/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/donate" element={<DonateNow/>} />
      </Routes>
  
   
    </div>
  );
}

export default App;
