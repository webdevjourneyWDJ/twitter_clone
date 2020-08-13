import React, {useContext, useEffect, useState} from 'react';
import{UserContext} from '../UserContext';
import axios from 'axios';

import Tweet from '../compnents/Tweet';

function Profile() {
  const {user} = useContext(UserContext);
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/user/tweets', {withCredentials: true}).then(x => setTweets(x.data.tweets));
  }, [])

  return (
    <div className="profile section">
      <h1>Profile page</h1>
      {tweets && tweets.map(tweet => <Tweet message={tweet.message} userName={user.name} key={tweet._id}/>)}
    </div>
  );
}

export default Profile;
