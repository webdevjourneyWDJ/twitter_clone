import React, { useState } from 'react';
import axios from 'axios';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from 'classnames';

function Tweet({message, userName, tweetId, tweetLiked, userId}) {
  const [liked, setLiked] = useState(tweetLiked.includes(userId));

  const handleLiked = () => {
    setLiked(!liked);
    axios.post('http://localhost:8080/tweets/liked', {tweetId}, {withCredentials: true});
  }

  return (
    <div className="card">
      <div className="grid">
        <div className="items card-heading">
          <div className="title">{userName}</div>
        </div>
        <div className="items card-content">
          <div>{message}</div>
        </div>
        <div className="items">
          <FontAwesomeIcon 
            icon={['fas', 'heart']}
            className={classNames("subscription-tag", {liked})} 
            onClick={handleLiked}/>
          <FontAwesomeIcon icon={['fas', 'comment']} className="subscription-tag"/>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
