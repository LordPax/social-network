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
    console.log(req.session)
    // const {userId} = req.session
    // if (userId) {
    //     logModel.searchUserInfo(userId, data => {
    //         res.locals.pseudo = data.username
    //         res.locals.rang = data.rang
    //         console.log('1 : ' + res.locals.pseudo)
    //         console.log('2 : ' + data.username)
    //     })
    //     console.log('3 : ' + res.locals.pseudo)
    // }
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