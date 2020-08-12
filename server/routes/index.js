const express = require('express');
const router = express.Router();

const authRoute = require('./auth');
const userRoute = require('./user');

module.exports = (params) => {
  router.get('/', (req, res, next) => {
    res.json({user: req.user})
  })

  router.use('/auth', authRoute());
  router.use('/user', userRoute(params));

  return router;
}