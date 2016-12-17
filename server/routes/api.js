'use strict'

const express = require('express');
const router = express.Router();
const axios = require('axios');

const postmark = require('postmark');
const serverToken = `5933bac0-e9ed-4974-9d46-c51f3ea81ca9`;
var client = new postmark.Client('POSTMARK_API_TEST');
const Registered = require('../database/models/modelsIndex').Registered;

router.post('/', (req, res, next) => {
  console.log(req.body);
  const message = `Hi ${req.body.firstName}
 
Selected (www.getselected.co) is a new platform for NYC teachers to match with schools and jobs you love.
 
We do this two ways:
 
1) Find your 'best fit' NYC school matches in < 2 minutes with our preference matching engine (e.g., Bronx, low income, diverse, non-charter)
 
2) Complete a short common app and be introduced to leading public and private schools in NYC. Schools are always hiring!
 
We also offer free workshops and events in NYC every month, you can check our event page at getselected.eventbrite.com
 
Finally, do you know friends looking for teaching jobs? We offer a $250 referral bonus to both you and your referral if your friend is hired through the Selected platform. Learn more here: www.getselected.co/referral
 
Thanks for listening!`

  client.sendEmail({
    "From": "chehitskenniexd@fullsail.edu",
    "To": req.body.email,
    "Subject": "Thank you for registering with Selected!",
    "TextBody": message
  }, function (error, result) {
    if (error) {
      console.error('Error: ' + error.message)
      res.json(error);
      return;
    }
    console.info("Sent to postmark", result);

    // add information to the db
    const contactedOn = result.SubmittedAt;
    const messageId = result.MessageID;

    Registered.create(Object.assign(req.body, {}, {
      messageId,
      contactedOn
    })) 
      .then(registered => {

      })
      .catch(err => console.error(err));

    res.json(result);
  })
})

router.get('/')

module.exports = router;