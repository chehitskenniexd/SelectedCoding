'use strict'

const Sequelize = require('sequelize');
const db = require('../db');

const Registered = db.define('registered', {
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true,
            notEmpty: true   
        }
    },
    schoolName: Sequelize.STRING,
    contactedOn: Sequelize.DATE,
    bounceType: Sequelize.JSON
}) //end db.define

module.exports = Registered