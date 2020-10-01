const express = require('express');
const router = express.Router();
const AWS = require('aws-sdk');
const uuid = require('uuid').v4;

module.exports = () => {

  const s3 = new AWS.S3({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY
  })

  router.get('/', (req, res, next) => {
    const key = `${req.user._id}/${uuid()}.png`;

    s3.getSignedUrl('putObject', {
      Bucket: 'twitter-clone-og',
      ContentType: "image/png",
      Key: key
    }, (err, url) => res.send({key, url}))
  })

  return router;
}