const mongoose = require('mongoose');

const TwwetSchema = mongoose.Schema({
  message: {
    type: String,
    required: true
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true });

const Tweet = mongoose.model('Tweet', TwwetSchema);

module.exports = {
  Tweet
}