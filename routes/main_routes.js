const app = require('express').Router()
const thModel = require('../models/thread_models')
const logModel = require('../models/login_models')
const {reformuleDate} = require('../include/until')
const showdown = require('showdown')
const convert = new showdown.Converter()

app.get('/', (req, res) => {
    thModel.threadAcc(10, thread => {
        res.render('pages/index', {
            titre : 'Winveer - accueil',
            thread : thread.map(elem => {
                return {
                    str_id : elem.str_id,
                    title : elem.title,
                    content : convert.makeHtml(elem.content),
                    user : 'test',
                    date : reformuleDate(elem.date)
                }
            }),
            userId : req.session.userId,
            name : req.session.pseudo,
            rang : req.session.rang
        })
    })
})

app.get('/404', (req, res) => res.render('pages/notfound', {
    titre: 'Winveer - 404',
    userId : req.session.userId,
    name : req.session.pseudo,
    rang : req.session.rang
}))

app.get('*', (req, res) => res.redirect('/404'))

module.exports = app