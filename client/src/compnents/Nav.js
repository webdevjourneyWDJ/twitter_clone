import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import TweetForm from './TweetForm';

function Nav() {
  const [display, setDisplay] = useState(false);

  return (
    <nav className="nav">
      <h3>Logo</h3>
      <div className="nav_links">
        <NavLink to="/">Login</NavLink>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <div onClick={() => {setDisplay(!display)}}>Tweet</div>
        {display && <TweetForm state={{display, setDisplay}}/>}
      </div>
    </nav>
  );
}

export default Nav;
