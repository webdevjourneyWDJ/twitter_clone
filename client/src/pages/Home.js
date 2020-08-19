import React, {useContext, useEffect, useState} from 'react';
import Tweet from '../compnents/Tweet';

import{UserContext} from '../UserContext';
import ApiService from '../services/ApiService';

function Home() {
  const {user} = useContext(UserContext);
  const [tweets, setTweets] = useState(null);

  useEffect(() => {
   ApiService.getAllTweets().then(x => setTweets(x.data.tweets));
  }, [])

  return (
    <div className="home section">
      <h1>Home page</h1>
      <div className="tweet_container">
        {tweets && tweets.map(tweet => <Tweet message={tweet.message} userName={tweet.creator.name} key={tweet._id}/>)}
      </div>
    </div>
  );
}

export default Home;
