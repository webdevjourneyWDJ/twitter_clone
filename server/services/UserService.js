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
    return User.findById(userId).populate('tweetsCreated');
  }
}

module.exports = UserService;