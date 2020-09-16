const express = require('express');
const router = express.Router();

const beGoneCache = require('../../middleware/beGoneCache');

module.exports = (params) => {

  const {tweetService, userService, config} = params;

  router.get('/', (req, res, next) => {
    if(req.isAuthenticated()){
      return res.json({
        name: req.user.name,
        userId: req.user._id,
        isAuth: req.isAuthenticated()
      })
    }

    return res.json({isAuth: req.isAuthenticated()});
  })

  router.get('/tweets', async (req, res, next) => {
    try {
      const userTweets = await userService.getAllTweets(req.user._id);
      return res.json({tweets: userTweets.tweetsCreated});
    } catch (err) {
      return next(err);
    }
  })

  router.post('/tweet', beGoneCache, async (req, res, next) => {
    const {message} = req.body;
    try {
      const tweet = await tweetService.addTweet(message, req.user._id);
      await userService.addTweet(req.user._id, tweet);
      return res.json({message: "added tweet to user"});
    } catch (err) {
      return next(err);
    }
  })

  return router;
}