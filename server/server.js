'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const volleyball = require('volleyball');

// initialize the application
const app = express();

// declare the static files
app.use(express.static(__dirname));
app.use(express.static(`${__dirname}/../public`));

app.use(volleyball);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('*', function (req, res) {
    res.sendFile(`${__dirname}/../public/index.html`);
})

const db = require('./database');

// begin listening on port 3000
app.listen(3000, function () {
    console.log('Server listening on port', 3000);
});