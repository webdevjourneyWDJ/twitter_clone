const {Comment} = require('../models/CommentModel');
const {User} = require('../models/UserModel');
const {Tweet} = require('../models/TweetModel');

class CommentService {
  
  async addComment(comment, userId, tweetId){
    const userComment = new Comment({
      comment,
      creator: userId,
      tweet: tweetId
    });

    userComment.save().then(comment => {
      User.findById(userId).then(user => {
        user.commentsCreated.push(comment);
        user.save();
      });

      Tweet.findById(tweetId).then(tweet => {
        tweet.comments.push(comment);
        tweet.save();
      });

      return comment;
    }).catch(err => {
      return err;
    });
  }
}

module.exports = CommentService;