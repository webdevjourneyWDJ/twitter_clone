const express = require('express');
const router = express.Router();

module.exports = (params) => {

  const {commentService} = params;

  router.post('/', async (req, res, next) => {
    const {comment, tweetId} = req.body;
    const commentSaved = await commentService.addComment(comment, req.user._id, tweetId);
    console.log("commentSaved", commentSaved);
    return res.json({commentSaved})
  });

  return router;
}