const app = require('express').Router()
const logModel = require('../models/login_models')
const {escapeHtml} = require('../include/lib-perso')
const mw = require('../include/middleware')

app.get('/profil/:username', (req, res) => {
    req.session.currUrl = req.originalUrl
    const username = escapeHtml(req.params.username)
    const {err} = req.session
    req.session.err = ''
    logModel.searchUserInfoByName(username, data => {
        res.render('pages/profil', {
            titre : 'Winveer - ' + username,
            userId : req.session.userId,
            name : req.session.pseudo,
            rang : req.session.rang,
            profil : {
                userId : data.id,
                name : username,
                rang : data.rang,
                email : data.email
            },
            err2 : err
        })
    }, err => {
        res.render('pages/profil', {
            titre : 'Winveer - introuvable',
            userId : req.session.userId,
            name : req.session.pseudo,
            rang : req.session.rang,
            err : err
        })
    })
})

app.get('/admin', mw.admin, (req, res) => {
    res.render('pages/admin', {
        titre : 'Winveer - Panel admin',
        userId : req.session.userId,
        name : req.session.pseudo,
        rang : req.session.rang,
    })
})

app.post('/profil/:username', (req, res) => {
    req.session.err = 'change coming soon'
    res.redirect('/profil/' + req.params.username)
})

module.exports = app