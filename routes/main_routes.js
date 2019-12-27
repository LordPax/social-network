const app = require('express').Router()
const db = require('../models/db')

app.get('/', (req, res) => db.threadAcc(10, thread => {
    res.render('pages/index', {
        titre : 'Winveer - accueil',
        thread : thread
    })
}))

app.get('/404', (req, res) => res.render('pages/notfound', {titre: 'Winveer - 404'}))

app.get('*', (req, res) => res.redirect('/404'))

module.exports = app