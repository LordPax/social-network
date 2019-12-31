const app = require('express').Router()
const logModel = require('../models/login_models')
const {str_rand, escapeHtml} = require('../include/lib-perso')

app.get('/register', (req, res) => res.render('pages/register', {titre: 'Winveer - inscription'}))

app.get('/login', (req, res) => res.render('pages/login', {titre: 'Winveer - connexion'}))

app.post('/register', (req, res) => {
	// if (req.body.username != '' &
	// 	req.body.email != '' & 
	// 	req.body.password != '' & 
	// 	req.body.password2 != '' & ){
		
	// 	const name = escapeHtml(req.body.username)
	// 	const email = escapeHtml(req.body.email)
	// 	const pw = escapeHtml(req.body.password)
	// 	const pw2 escapeHtml(req.body.password2)


	// }
	// else

})

module.exports = app