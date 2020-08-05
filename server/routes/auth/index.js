const express = require('express');
const router = express.Router();

const googleRoute = require('./google');

module.exports = () => {

  router.use('/google', googleRoute());

  return router;
}