'use strict'

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.json(__dirname);
})

module.exports = router;