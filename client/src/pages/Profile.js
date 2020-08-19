import React, {useContext, useEffect, useState} from 'react';
import{UserContext} from '../UserContext';
import ApiService from '../services/ApiService';

import Tweet from '../compnents/Tweet';

function Profile() {
  const {user} = useContext(UserContext);
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    ApiService.getUserTweets().then(x => setTweets(x.data.tweets));
  }, [])

  return (
    <div className="profile section">
      <h1>Profile page</h1>
      <div className="tweet_container">
        {tweets && tweets.map(tweet => <Tweet userId={user.userId} tweetLiked={tweet.liked} message={tweet.message} tweetId={tweet._id} userName={user.name} key={tweet._id}/>)}
      </div>
    </div>
  );
}

export default Profile;
