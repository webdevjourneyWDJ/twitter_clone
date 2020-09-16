const {User} = require('../models/UserModel');
const user = require('../routes/user');

class UserService {

  async addTweet(userId, tweet){
    User.findById(userId).then(user => {
      user.tweetsCreated.push(tweet);
      return user.save();
    })
  }

  async getAllTweets(userId){
    return User.findById(userId).populate('tweetsCreated').cache({key: userId, nestedHashKey: "allTweets"});
  }

  async addLiked(user, tweetId){
    User.findById(user).then(user => {
      if(user.tweetsLiked.includes(tweetId)){
        console.log("User Unliked Tweet");
        user.tweetsLiked.pull(tweetId);
      } else{
        console.log("User liked Tweet");
        user.tweetsLiked.push(tweetId);
      }
      return user.save();
    })
  }
}

module.exports = UserService;