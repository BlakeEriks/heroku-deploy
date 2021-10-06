/* Dependencies */
const express = require('express')

/* Create Home Router */
const homeRouter = express.Router()

/* Define Routes */
homeRouter.get('/', (req,res) => {
    res.render('home/index');
})

/* Export */
module.exports = homeRouter