import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="main-header">
    <span className="site-name"><NavLink to="/">Budget Tool</NavLink></span>
    <ul className="main-nav">
      <li><NavLink to="/add_transaction">Add Transactions</NavLink></li>
      <li><NavLink to="/overview">Overview</NavLink></li>
      <li><NavLink to="/profile">Profile</NavLink></li>
      <li><NavLink to="/login">Login</NavLink></li>
    </ul>    
  </header>
);

export default Header;