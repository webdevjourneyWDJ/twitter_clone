const express = require('express');
const router = express.Router();

const googleRoute = require('./google');

module.exports = () => {

  router.get('/logout', (req, res, next) => {
    req.logout();
    return res.redirect("http://localhost:3000");
  })

  router.use('/google', googleRoute());

  return router;
}