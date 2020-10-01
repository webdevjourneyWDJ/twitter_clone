const mongoose = require('mongoose');

const TweetSchema = mongoose.Schema({
  image: {
    type: String
  },
  message: {
    type: String,
    required: true
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  liked:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }]
}, { timestamps: true });

const Tweet = mongoose.model('Tweet', TweetSchema);

module.exports = {
  Tweet
}