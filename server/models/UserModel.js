const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  tweetsCreated: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tweet'
  }],
  tweetsLiked: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tweet'
  }]
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

module.exports = {
  User
}