import React, {useContext, useEffect, useState} from 'react';
import Card from '../compnents/Card';

import{UserContext} from '../UserContext';
import ApiService from '../services/ApiService';

function Tweet({match}) {
  const {user} = useContext(UserContext);
  const [tweets, setTweets] = useState(null);

  useEffect(() => {
    ApiService.getTweetById(match.params.tweetId).then(x => console.log(x));
  }, [])

  return (
    <div className="tweet section">
      <h1>Tweet page</h1>
    </div>
  );
}

export default Tweet;
