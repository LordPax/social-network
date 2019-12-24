const app = require('express').Router()

app.get('/', (req, res) => res.render('pages/index', {titre: 'Winveer - accueil'}))

app.get('/404', (req, res) => res.render('pages/index', {titre: 'Winveer - 404'}))

module.exports = app