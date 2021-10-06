const express = require('express')
const middleware = require('./utils/middleware')

const app = express()
middleware(app)

//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;

//___________________
// Routes
//___________________
//localhost:3000
app.get('/' , (req, res) => {
  res.render('index.ejs');
});

//___________________
//Listener
//___________________
app.listen(PORT, () => console.log('express is listening on:', PORT));