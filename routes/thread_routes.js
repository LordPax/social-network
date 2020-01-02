const app = require('express').Router()
const thModel = require('../models/thread_models')
const {refomuleDate} = require('../include/until')
const showdown = require('showdown')
const convert = new showdown.Converter()

app.get('/newthread', (req, res) => res.render('pages/newthread', {
    titre: 'Winveer - nouveau thread',
    userId : req.session.userId,
    name : req.session.pseudo,
    rang : req.session.rang
}))

app.get('/thread/:id', (req, res) => {
    if (req.params.id != '') {
        const id = req.params.id
        thModel.searchThread(id, data => {
            thModel.searchRep(id, rep => {
                res.render('pages/thread', {
                    titre : 'Winveer - thread',
                    threadTitle : data.title,
                    content : convert.makeHtml(data.content),
                    reponse : rep.map(elem => { return {
                        content : convert.makeHtml(elem.content),
                        user : 'test',
                        date : refomuleDate(elem.date)
                    }}),
                    date : refomuleDate(data.date),
                    user : 'test',
                    userId : req.session.userId,
                    name : req.session.pseudo,
                    rang : req.session.rang
                })
            })
        }, err => res.redirect('/'))
    }
    else
        res.redirect('/')
})

app.post('/newthread', (req, res) => {
	if (req.body.input_title != '' && req.body.input_content != '') {
        const title = req.body.input_title, content = req.body.input_content
        const {userId} = req.session
        const id = userId ? userId : 0
        const str_id = thModel.addThread(title, content, id)
        res.redirect('/thread/' + str_id)
    }
    else
	    res.redirect('/newthread')
})

app.post('/thread/:id', (req, res) => {
    if (req.body.input_content != '' && req.params.id != '') {
        const content = req.body.input_content, str_id = req.params.id
        const {userId} = req.session
        const id = userId ? userId : 0
        thModel.repThread(str_id, content, id)
        res.redirect('/thread/' + str_id)
    }
    else
        res.redirect('/')
})

module.exports = app