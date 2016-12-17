'use strict'

const Sequelize = require('sequelize');

const name = `selectedCoding`;
const url = `postgres://localhost:5432/${name}`;

module.exports = new Sequelize(url, {
    logging: false,
    native: true
});