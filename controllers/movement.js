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

movementRouter.post('/', (req,res) => {
    console.log(req.body)
    res.redirect('/lifts')
})

/* Export */
module.exports = movementRouter