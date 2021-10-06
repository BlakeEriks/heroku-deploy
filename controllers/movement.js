/* Dependencies */
const express = require('express')
const Movement = require('../models/movement')
const bcrypt = require('bcryptjs')

/* Create Movement Router */
const movementRouter = express.Router()

/* Define Routes */
movementRouter.get('/', (req,res) => {
    res.send('Hello Movement Home')
})

/* Export */
module.exports = movementRouter