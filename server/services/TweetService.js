const {Tweet} = require('../models/TweetModel');

class TweetService {
  
  async addTweet(message, userId){
    const tweet = new Tweet({
      message,
      creator: userId
    });

    return tweet.save();
  }

  async getAllTweets(){
    return Tweet.find().populate('creator', ['name', 'email']);
  }
}

module.exports = TweetService;