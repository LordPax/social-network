const app = require('express').Router()
const logModel = require('../models/login_models')
const {str_rand, escapeHtml} = require('../include/lib-perso')
const mw = require('../include/middleware')
const until = require('../include/until')

app.get('/register', mw.redirectMain, (req, res) => {
    let info
    // if (req.session.err) 
    //  info = {titre: 'Winveer - inscription', err : req.session.err}
    // else
    // info = {titre: 'Winveer - inscription'}

    res.render('pages/register', {titre: 'Winveer - inscription'})
})

app.get('/login', mw.redirectMain, (req, res) => res.render('pages/login', {titre: 'Winveer - connexion'}))

app.post('/register', mw.redirectMain, (req, res) => {
    const {username, email, password, password2} = req.body
    until.registerVerif({
        username,
        email,
        password,
        password2
    }, data => {
        logModel.addUser({
            username : data.name,
            email : data.email,
            password : data.hash
        })
        res.redirect('/login')
    }, err => {
        res.render('pages/register', {
            titre : 'Winveer - inscription',
            err
        })
    })
})

app.post('/login', mw.redirectMain, (req, res) => {
    const {username, password} = req.body
    until.loginVerif({
        username,
        password
    }, id => {
        console.log(id)
        res.redirect('/login')
    }, err => {
        res.render('pages/login', {
            titre : 'Winveer - connexion',
            err
        })
    })
})

app.post('/logout', mw.redirectLogin, (req, res) => {})

module.exports = app