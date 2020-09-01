import React, {useState, useContext} from 'react';
import {UserContext} from '../UserContext';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ApiService from '../services/ApiService';

function TweetForm(props) {
  const {user} = useContext(UserContext);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    ApiService.postComment(comment, props.tweetId).then(data => {
      props.state.setCommentForm(false);
    });
  }
  return (
    <form className="wrapper" onSubmit={handleSubmit}>
      <div className="cmd">
        <FontAwesomeIcon icon={['fas', 'times']} className="form_close" onClick={() => props.state.setCommentForm(false)}/>
        <div className="title-bar">comment@{user.name}: ~</div>
        <textarea className="textarea" placeholder="This is a comment" onChange={(e) => setComment(e.target.value)} />
        <button type="submit"><span>Submit</span></button>
      </div>
    </form>
  );
}

export default TweetForm;
