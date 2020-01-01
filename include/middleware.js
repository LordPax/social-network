const logModel = require('../models/login_models')
const {escapeHtml} = require('../include/lib-perso')
const sha256 = require('sha256')

const redirectLogin = (req, res, next) => {
    !req.session.userId ? res.redirect('/login') : next()
}

const redirectMain = (req, res, next) => {
    req.session.userId ? res.redirect('/') : next()
}

const mwInfo = (req, res, next) => {
    const {userId} = req.session
    if (userId) {
        console.log('test')
    }
    console.log(req.session)
    next()
}

const redisErr = (req, res, next) => {
    if (!req.session)
        return next(new Error('oh no'))
    next()
}

module.exports = {
    redirectLogin,
    redirectMain,
    mwInfo,
    redisErr
}