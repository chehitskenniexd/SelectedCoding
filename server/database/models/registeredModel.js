'use strict'

const Sequelize = require('sequelize');
const db = require('../db');

const Registered = db.define('registered', {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    email: {
        type: Sequelize.STRING,

    },
    schoolName: Sequelize.STRING,
    contactedOn: Sequelize.DATE,
    messageId: Sequelize.STRING,
    bounceType: Sequelize.JSON
}) //end db.define

module.exports = Registered