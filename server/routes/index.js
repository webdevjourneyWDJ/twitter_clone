const express = require('express');
const router = express.Router();

const authRoute = require('./auth');

module.exports = () => {
  router.get('/', (req, res, next) => {
    res.json({user: req.user})
  })

  router.use('/auth', authRoute());

  return router;
}