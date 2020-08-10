const express = require('express');
const router = express.Router();
const passport = require('passport');

module.exports = () => {

  router.get('/', passport.authenticate('google', {scope: ['profile', 'email']}));

  router.get('/callback', passport.authenticate('google'), (req, res, next) => {
    return res.redirect("http://localhost:3000");
  })

  return router;
}