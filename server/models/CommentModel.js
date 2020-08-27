const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
  comment: {
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
  tweet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tweet'
  }
}, { timestamps: true });

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = {
  Comment
}