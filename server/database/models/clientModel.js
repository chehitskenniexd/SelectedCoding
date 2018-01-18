'use strict'

const Sequelize = require('sequelize');
const db = require('db');

const Client = db.define('client',{
    date: Sequelize.DATE,
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    socialDigits: Sequelize.INTEGER,
    eicChildren: Sequelize.BOOLEAN,
    missingDocs: Sequelize.BOOLEAN,
    preparer: Sequelize.STRING,
    phoneNumber: Sequelize.STRING,
    fee: Sequelize.INTEGER,
    // may want to refactor this to a join table
    comments: Sequelize.STRING 
}) //end db.define

module.exports = Client