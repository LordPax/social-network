const logModel = require('../models/login_models')
const {escapeHtml} = require('../include/lib-perso')
const sha256 = require('sha256')

const log = (req, res, next) => {
    req.session.userId ? next() : res.redirect('/')
}

const admin = (req, res, next) => {
    req.session.userId && req.session.rank !== 0 ? next() : res.redirect('/')
}

const notLog = (req, res, next) => {
    !req.session.userId ? next() : res.redirect('/')
}

const mwInfo = (req, res, next) => {
    // console.log(req.session)
    
    next()
}

const redisErr = (req, res, next) => {
    if (!req.session)
        return next(new Error('oh no'))
    next()
}

module.exports = {
    notLog,
    log,
    admin,
    mwInfo,
    redisErr
}