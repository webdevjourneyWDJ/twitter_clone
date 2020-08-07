import React from 'react';
import {NavLink} from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav">
      <h3>Logo</h3>
      <div className="nav_links">
        <NavLink to="/">Login</NavLink>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </div>
    </nav>
  );
}

export default Nav;
