const express = require('express');
const router = express.Router();

module.exports = (params) => {

  const {tweetService, userService} = params;

  router.get('/', async (req, res, next) => {
    const tweets = await tweetService.getAllTweets();
    return res.json({tweets})
  })

  return router;
}