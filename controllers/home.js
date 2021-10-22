/* Dependencies */
const express = require('express')
const loginCheck = require('../utils/loginCheck')

/* Create Home Router */
const homeRouter = express.Router()

/* Verify User is Logged In */
// homeRouter.use(loginCheck)

/* Define Routes */
homeRouter.get('/home', (req,res) => {
    res.render('home/home');
})

/* Exports */
module.exports = homeRouter