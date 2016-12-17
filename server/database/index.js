'use strict'

const Sequelize = require('sequelize');
const db = require('./db');

// Require the models
require('./models/modelsIndex');

const name = `selectedCoding`;
const url = `postgres://localhost:5432/${name}`;

db.sync({ force: true })
  .then(() => console.log(`Synced models to db ${name}`))
  .catch(() => {
    console.log(`Creating db ${name}`);
    return new Promise((resolve, reject) => {
      require('child_process').exec(`createdb "${name}"`, resolve)
    })
      .then(() => db.sync({ force: true }))
  })

module.exports = db;