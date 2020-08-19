import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import TweetForm from './TweetForm';

function Nav() {
  const [display, setDisplay] = useState(false);

  return (
    <nav className="nav">
      <h3>Logo</h3>
      <div className="nav_links">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <div className="tweet" onClick={() => {setDisplay(!display)}}>Tweet</div>
        <a href="http://localhost:8080/auth/logout">Logout</a>
      </div>
      {display && <TweetForm state={{display, setDisplay}}/>}
    </nav>
  );
}

export default Nav;
