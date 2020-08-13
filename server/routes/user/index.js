const express = require('express');
const router = express.Router();

const {User} = require('../../models/UserModel');

module.exports = (params) => {

  const {tweetService} = params;

  router.get('/', (req, res, next) => {
    return res.json({
      name: req.user.name,
      userId: req.user._id})
  })

  router.get('/tweets', async (req, res, next) => {
    User.findById(req.user._id).then(user => {
      user.populate('tweetsCreated').execPopulate().then(result => 
        res.json({tweets: result.tweetsCreated}
      ));
    })
  })

  router.post('/tweet', async (req, res, next) => {
    const {message, userId} = req.body;
    const tweet = await tweetService.addTweet(message, userId);
    User.findById(userId).then(user => {
      user.tweetsCreated.push(tweet);
      user.save().then(user => res.json({message: "successfully added tweet"}));
    })
  })

  return router;
}