const express = require('express');
const router = express.Router();
const passport = require('passport');

module.exports = () => {

  router.get('/', passport.authenticate('google', {scope: ['profile', 'email']}));

  router.get('/callback', passport.authenticate('google'), (req, res, next) => {
    res.json({user: req.user})
  })

  return router;
}