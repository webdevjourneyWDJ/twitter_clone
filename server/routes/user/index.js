const express = require('express');
const router = express.Router();

module.exports = () => {

  router.get('/', (req, res, next) => {
    return res.json({
      name: req.user.name,
      userId: req.user._id})
  })

  return router;
}