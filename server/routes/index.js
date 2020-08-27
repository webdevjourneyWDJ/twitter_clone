const express = require('express');
const router = express.Router();

const authRoute = require('./auth');
const userRoute = require('./user');
const tweetsRoute = require('./tweets');
const commentsRoute = require('./comments');

module.exports = (params) => {
  router.get('/', (req, res, next) => {
    res.json({user: req.user})
  })

  router.use('/auth', authRoute());
  router.use('/user', userRoute(params));
  router.use('/tweets', tweetsRoute(params));
  router.use('/comments', commentsRoute(params));

  return router;
}