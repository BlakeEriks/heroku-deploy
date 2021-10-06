/* Dependencies */
const express = require('express')
const Lift = require('../models/lift')
const bcrypt = require('bcryptjs')

/* Create Movement Router */
const liftRouter = express.Router()

/* Define Routes */
liftRouter.get('/', (req,res) => {
    res.send('Hello Movement Home')
})

/* Export */
module.exports = liftRouter