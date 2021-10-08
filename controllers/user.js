/* Dependencies */
const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcryptjs')

/* Create User Router */
const userRouter = express.Router()

/* Define Routes */
userRouter.get('/login', (req,res) => {
    res.render('user/login')
})

/* Define Routes */
userRouter.get('/signup', (req,res) => {
    res.render('user/signup')
})

/* Export */
module.exports = userRouter