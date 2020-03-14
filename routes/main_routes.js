const app = require('express').Router()
const thModel = require('../models/thread_models')
const logModel = require('../models/login_models')

app.get('/', (req, res) => {
    req.session.currUrl = req.originalUrl
    thModel.threadAcc(10, thread => {
        thModel.searchEpingle(epingle => {
            // console.log(thread)
            res.render('pages/index', {
                titre : 'social-network - accueil',
                thread,
                epingle,
                userId : req.session.userId,
                name : req.session.pseudo,
                rank : req.session.rank
            })
        })
    })

})

app.get('/404', (req, res) => res.render('pages/notfound', {
    titre: 'social-network - 404',
    userId : req.session.userId,
    name : req.session.pseudo,
    rank : req.session.rank
}))

app.get('*', (req, res) => res.redirect('/404'))

module.exports = app