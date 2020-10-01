import React, {useState, useContext} from 'react';
import {UserContext} from '../UserContext';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ApiService from '../services/ApiService';

function TweetForm(props) {
  const {user} = useContext(UserContext);
  const [message, setMessage] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    ApiService.postTweet(message, image).then(data => {
      props.state.setDisplay(false);
    });
  }
  return (
    <form className="wrapper" onSubmit={handleSubmit}>
      <div className="cmd">
        <FontAwesomeIcon icon={['fas', 'times']} className="form_close" onClick={() => props.state.setDisplay(false)}/>
        <div className="title-bar">ubuntu@{user.name}: ~</div>
        <textarea className="textarea" placeholder="Tell me something juicy" onChange={(e) => setMessage(e.target.value)} />
        <input  type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} style={{position: "absolute"}}/>
        <button type="submit"><span>Submit</span></button>
      </div>
    </form>
  );
}

export default TweetForm;
