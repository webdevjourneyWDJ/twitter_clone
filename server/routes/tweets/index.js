const express = require('express');
const router = express.Router();

module.exports = (params) => {

  const {tweetService, userService} = params;

  router.get('/', async (req, res, next) => {
    const tweets = await tweetService.getAllTweets();
    return res.json({tweets})
  })

  router.post('/liked', async(req, res, next) => {
    try {
      await userService.addLiked(req.user._id, req.body.tweetId);
      await tweetService.addLiked(req.user._id, req.body.tweetId);
    } catch (err) {
      return next(err);
    }
  })

  return router;
}