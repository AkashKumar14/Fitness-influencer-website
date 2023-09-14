import React from 'react';
import UserProfile from './UserProfile';
import './Header.css';
import iconfit from "./iconfit.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
      <img src={iconfit} alt="iconfit" style={{color: 'white'}}/>
      </div>
      <div style={{fontSize: 35, fontFamily: 'fantasy', color: '#FCF55F'}}>
        GO-FIT
      </div>
      <UserProfile />
    </header>
  );
};

export default Header;
