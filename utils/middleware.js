/* Dependencies */
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const session = require('express-session')
const MongoStore = require('connect-mongo')

/* Routers */
const HomeRouter = require('../controllers/home')
const UserRouter = require('../controllers/user')
const LiftRouter = require('../controllers/lift')
const MovementRouter = require('../controllers/movement')

/* Middleware Setup Function */
const middleware = app => {

    /* Logging */
    app.use(morgan('tiny'))

    /* Override POST's for PUT and DELETE*/
    app.use(methodOverride("_method"))

    /* Parse URL-encoded bodies */
    app.use(express.urlencoded({extended: true}))

    /* Serve files from public */
    app.use(express.static('public'))

    /* Set view engine to ejs */
    app.set('view engine', 'ejs')

    /* TODO add user sessions */

    /* Add routers to app */
    app.use('/', HomeRouter)
    app.use('/user', UserRouter)
    app.use('/lifts', LiftRouter)
    app.use('/movements', MovementRouter)
}

/* Export */
module.exports = middleware