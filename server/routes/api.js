'use strict'

const express = require('express');
const router = express.Router();
const axios = require('axios');

const postmark = require('postmark');
const serverToken = `5933bac0-e9ed-4974-9d46-c51f3ea81ca9`;
var client = new postmark.Client('POSTMARK_API_TEST');

router.post('/', (req, res, next) => {
  client.sendEmail({
    "From": "chehitskenniexd@fullsail.edu",
    "To": "target@example.us",
    "Subject": "Test",
    "TextBody": "Test Message"
  }, function (error, result) {
    if (error) {
      console.error('Error: ' + error.message)
      res.json(error);
      return;
    }
    console.info("Sent to postmark", result);
    // add information to the db

    res.json(result);
  })
})

router.get('/')

module.exports = router;