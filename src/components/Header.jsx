import React from 'react';
import './Header.css';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to={`/`}>
        <img src="/images/Logo.png" alt="Logo" style={{ width: '42%' }} />
        </Link>
      </div>
      <NavBar />
    </header>
  );
}

export default Header;
