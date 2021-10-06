/* Dependencies */
const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcryptjs')

/* Create User Router */
const userRouter = express.Router()

/* Define Routes */
userRouter.get('/', (req,res) => {
    res.send('Hello User Home')
})

/* Export */
module.exports = userRouter