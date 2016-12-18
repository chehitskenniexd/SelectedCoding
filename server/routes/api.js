'use strict'

const express = require('express');
const router = express.Router();
const axios = require('axios');

const postmark = require('postmark');
const serverToken = `5933bac0-e9ed-4974-9d46-c51f3ea81ca9`;
var client = new postmark.Client('POSTMARK_API_TEST');
const Registered = require('../database/models/modelsIndex').Registered;

const fs = require('fs');
const path = require('path');
const Promise = require('bluebird');

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

router.get('/registered', (req, res, next) => {
  Registered.findAll()
    .then(allRegistered => {
      res.json(allRegistered);
    })
    .catch(err => console.error(err));
})

router.get('/bounce', (req, res, next) => {
  let bounceArray = [];
  axios.get('https://api.postmarkapp.com/bounces?inactive=true&count=500&offset=0',
    {
      headers: {
        'X-Postmark-Server-Token': '5933bac0-e9ed-4974-9d46-c51f3ea81ca9',
        'Content-Type': 'application/json'
      }
    })
    .then(results => {
      const bounces = results.data.Bounces;
      res.json(results.data.Bounces)
    })
    .catch(err => console.error(err));
})

router.post('/loadCSV', (req, res, next) => {
  // load in all the teacherData and then store it into objects
  const info = fs.readFileSync(
    path.resolve(__dirname, '../../public/mockTeacherContactData.csv'), 'utf-8');
  const infoArray = info.split('\r\n'); // 'firstName,lastName,email,schoolName' for index [0];
  const infoColumns = infoArray.shift().split(',');
  const infoObjs = infoArray.map(info => {
    let obj = {};
    const teacherData = info.split(',');
    infoColumns.forEach((col, index) => {
      obj[col] = teacherData[index]
    })
    return obj;
  })

  // for each piece of data, send an email as well as store it into the db
  const infoPromises = infoObjs.map(obj => {
    const message = `Hi ${obj.firstName}
 
Selected (www.getselected.co) is a new platform for NYC teachers to match with schools and jobs you love.
 
We do this two ways:
 
1) Find your 'best fit' NYC school matches in < 2 minutes with our preference matching engine (e.g., Bronx, low income, diverse, non-charter)
 
2) Complete a short common app and be introduced to leading public and private schools in NYC. Schools are always hiring!
 
We also offer free workshops and events in NYC every month, you can check our event page at getselected.eventbrite.com
 
Finally, do you know friends looking for teaching jobs? We offer a $250 referral bonus to both you and your referral if your friend is hired through the Selected platform. Learn more here: www.getselected.co/referral
 
Thanks for listening!`
    return client.sendEmail({
      "From": "chehitskenniexd@fullsail.edu",
      "To": obj.email,
      "Subject": "Thank you for registering with Selected!",
      "TextBody": message
    }, function (error, result) {
      if (error) {
        console.error('Error: ' + error.message)
        return Registered.create(obj)
          .then(result => result)
          .catch(err => console.error(err));;
      }
      const contactedOn = result.SubmittedAt;
      const messageId = result.MessageID;

      return Registered.create(Object.assign(obj, {}, {
        messageId,
        contactedOn
      }))
        .then(result => result)
        .catch(err => console.error(err));
    })
  })

  Promise.all(infoPromises)
    .then(() => res.status(201))
    .catch(err => console.error(err));
})

module.exports = router;