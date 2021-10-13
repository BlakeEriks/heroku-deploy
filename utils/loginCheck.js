const loginCheck = (req,res,next) => {
    if (req.session.loggedIn) {
        res.locals.username = req.session.username
        next();
    }
    else {
        res.redirect('/login')
    }
}

module.exports = loginCheck