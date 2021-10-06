/* Dependencies */
const express = require('express')
const middleware = require('./utils/middleware')

/* Create App */
const app = express()

/* Set Up Middleware */
middleware(app)

/* Listen For Server Connections */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('LiftMate running on port', PORT));