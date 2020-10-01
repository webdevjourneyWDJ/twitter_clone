import React, { useState } from 'react';
import CommentForm from './CommentForm';
import {Link} from 'react-router-dom';
import ApiService from '../services/ApiService';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from 'classnames';

function Tweet({message, userName, tweetId, tweetLiked, userId, image}) {
  const [liked, setLiked] = useState(tweetLiked.includes(userId));
  const [commentForm, setCommentForm] = useState(false);

  const handleLiked = () => {
    setLiked(!liked);
    ApiService.postTweetLiked(tweetId);
  }

  return (
    <div className="card">
    <Link to={`${userName}/tweet/${tweetId}`} className="card_overlay" />
      <div className="grid">
        <div className="items card-heading">
          <div className="title">{userName}</div>
        </div>
        <div className="items card-content">
          <div>{message}</div>
          {image && <img src={`https://twitter-clone-og.s3.amazonaws.com/${image}`} alt="image"/>}
        </div>
        <div className="items">
          <FontAwesomeIcon 
            icon={['fas', 'heart']}
            className={classNames("subscription-tag", {liked})} 
            onClick={handleLiked}/>
          <FontAwesomeIcon 
            icon={['fas', 'comment']} 
            className="subscription-tag"
            onClick={() => setCommentForm(!commentForm)}/>
        </div>
      </div>
      {commentForm && <CommentForm state={{setCommentForm}} tweetId={tweetId}/>}
    </div>
  );
}

export default Tweet;
