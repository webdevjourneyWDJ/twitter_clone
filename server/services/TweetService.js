const {Tweet} = require('../models/TweetModel');

class TweetService {
  
  async addTweet(message, image, userId){
    const tweet = new Tweet({
      image,
      message,
      creator: userId
    });

    return tweet.save();
  }

  async getTweetById(tweetId){
    return Tweet.findById(tweetId)
      .populate('creator', ['name', 'email'])
      .populate({
        path: 'comments',
        populate: {
          path: 'creator',
          populate: 'commentsCreated'
        }
      });
  }

  async getAllTweets(){
    return Tweet.find().populate('creator', ['name', 'email']);
  }

  async addLiked(user, tweetId){
    Tweet.findById(tweetId).then(tweet => {
      if(tweet.liked.includes(user)){
        console.log('Disliked Tweet');
        tweet.liked.pull(user);
      }
      else {
        console.log('Liked Tweet');
        tweet.liked.push(user);
      }
      return tweet.save();
    })
  }
}

module.exports = TweetService;