import React from 'react';
import { NavLink } from 'react-router-dom';

// Fav Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../css/header.css';

const Header = () => (
  <header className="main-header">
    <h1 className="site-name"><NavLink to="/">Budget Tool</NavLink></h1>
      <label className="menu-button" htmlFor="menu"><FontAwesomeIcon icon="bars" />Menu</label>
      <input className="menu-checkbox" type="checkbox" id="menu"></input>
    <div className="main-nav menu-content">
      <ul className="main-nav">
        <li><NavLink to="/add_transaction" activeClassName="selected">Add Transaction</NavLink></li>
        <li><NavLink to="/overview" activeClassName="selected">Overview</NavLink></li>
        <li><NavLink to="/profile" activeClassName="selected">Profile</NavLink></li>
        <li><NavLink to="/login" activeClassName="selected">Login</NavLink></li>
      </ul>
    </div>
  </header>
);

export default Header;