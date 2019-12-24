const app = require('express').Router()
const db = require('../models/db')

app.get('/newthread', (req, res) => res.render('pages/newthread', {titre: 'Winveer - nouveau thread'}))

app.get('/thread/:id', (req, res) => {
    if (req.params.id != '') {
        const id = parseInt(req.params.id)
        db.searchThread(id, (data) => {
            res.render('pages/thread', {
                titre : 'Winveer - thread',
                threadTitle : data.title,
                content : data.content
            })
        }, (err) => res.redirect('/'))
    }
    else{
        res.redirect('/')
    }
})

app.post('/newthread', (req, res) => {
	if (req.body.input_title != '' && req.body.input_content != ''){
        const title = req.body.input_title, content = req.body.input_content
        db.addThread(title, content, 0)
        res.redirect('/newthread')
    }
    else
	    res.redirect('/newthread')
})

module.exports = app