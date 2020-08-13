import React, {useState, useContext} from 'react';
import axios from 'axios';
import {UserContext} from '../UserContext';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TweetForm(props) {
  const {user} = useContext(UserContext);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/user/tweet', {message, userId: user.userId}, {withCredentials: true}).then(data => {
      console.log(data);
      props.state.setDisplay(false);
    });
  }
  return (
    <form className="wrapper" onSubmit={handleSubmit}>
      <div className="cmd">
        <FontAwesomeIcon icon={['fas', 'times']} className="form_close" onClick={() => props.state.setDisplay(false)}/>
        <div className="title-bar">ubuntu@ubuntu: ~</div>
        <textarea className="textarea" placeholder="Tell me something juicy" onChange={(e) => setMessage(e.target.value)} />
        <button type="submit"><span>Submit</span></button>
      </div>
    </form>
  );
}

export default TweetForm;
