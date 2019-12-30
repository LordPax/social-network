const app = require('express').Router()
const db = require('../models/db')
const {refomuleDate} = require('../include/until')
const showdown = require('showdown')
const convert = new showdown.Converter()

app.get('/', (req, res) => db.threadAcc(10, thread => { 
    res.render('pages/index', {
        titre : 'Winveer - accueil',
        thread : thread.map(elem => { return {
            str_id : elem.str_id,
            title : elem.title,
            content : convert.makeHtml(elem.content),
            user : elem.user,
            date : refomuleDate(elem.date)
        }})
    })
}))

app.get('/404', (req, res) => res.render('pages/notfound', {titre: 'Winveer - 404'}))

app.get('*', (req, res) => res.redirect('/404'))

module.exports = app