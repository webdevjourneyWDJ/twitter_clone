const mongoose = require('mongoose');

const TweetSchema = mongoose.Schema({
  message: {
    type: String,
    required: true
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true });

const Tweet = mongoose.model('Tweet', TweetSchema);

module.exports = {
  Tweet
}