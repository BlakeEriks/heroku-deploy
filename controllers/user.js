/* Dependencies */
const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcryptjs')

/* Create User Router */
const userRouter = express.Router()

/* Define Routes */
userRouter.get('/', (req,res) => {
    res.render('user/intro');
})

userRouter.get('/login', (req,res) => {
    res.render('user/login')
})

userRouter.post('/login', (req,res) => {
    const {username, password} = req.body
    User.findOne({username}, async (err,user) => {
        if (!user) {
            res.send('User does not exist')
            return
        }
        const result = await bcrypt.compare(password, user.password)
        if (!result) {
            res.send('Wrong password')
            return
        }
        req.session.loggedIn = true
        req.session.username = username
        res.redirect('/home')
    })
})

userRouter.get('/signup', (req,res) => {
    res.render('user/signup')
})

userRouter.post('/signup', async (req,res) => {
    req.body.password = await bcrypt.hash(req.body.password, await bcrypt.genSalt(10))
    User.create(req.body, (err,user) => {
        res.redirect('/login')
    })
})

/* Export */
module.exports = userRouter