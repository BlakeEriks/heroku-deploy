/* Dependencies */
const express = require('express')

const homeRouter = express.Router()

/* Define Routes */
homeRouter.get('/', (req,res) => {
    res.render('home/intro');
})

homeRouter.get('/home', (req,res) => {
    res.render('home/home');
})

/* Exports */
module.exports = homeRouter