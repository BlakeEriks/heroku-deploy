
/* Dependencies */
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const session = require('express-session')
const MongoStore = require('connect-mongo')

/* Routers */

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

    /* TODO add user sessions */

    /* TODO add routers */
}

module.exports = middleware