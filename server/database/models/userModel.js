'use strict'

const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define('user', {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true,
            notEmpty: true   
        }
    },
    password: Sequelize.STRING
}) // end db.define

module.exports = User;