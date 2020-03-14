const app = require('express').Router()
const thModel = require('../models/thread_models')
const logModel = require('../models/login_models')
const {reformuleDate} = require('../include/until')
const showdown = require('showdown')
const convert = new showdown.Converter()

app.get('/newthread', (req, res) => {
    req.session.currUrl = req.originalUrl
    const {err} = req.session
    req.session.err = ''
    res.render('pages/newthread', {
        titre: 'social-network - nouveau thread',
        userId : req.session.userId,
        name : req.session.pseudo,
        rank : req.session.rank,
        err
    })
})

app.get('/thread/:id', (req, res) => {
    req.session.currUrl = req.originalUrl
    const {err} = req.session
    req.session.err = ''
    if (req.params.id != '') {
        const id = req.params.id
        thModel.searchThread(id, data => {
            thModel.searchRep(id, rep => {
                thModel.searchEpingle(epingle => {
                    thModel.isEpingle(id, isEp => {
                        res.render('pages/thread', {
                            titre : 'social-network - thread',
                            str_id : data.str_id,
                            threadTitle : data.title,
                            content : data.content,
                            isEp,
                            reponse : rep,
                            date : data.date,
                            user : data.user,
                            username : data.username,
                            userIdT : data.userId,
                            userId : req.session.userId,
                            epingle,
                            name : req.session.pseudo,
                            rank : req.session.rank,
                            err
                        })
                    })
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
        const {pseudo} = req.session
        const id = userId ? userId : 0
        const str_id = thModel.addThread(title, content, id)
        res.redirect('/thread/' + str_id)
    }
    else {
        req.session.err = 'Les champs de textes ne doivent pas être vide'
	    res.redirect('/newthread')
    }
})

module.exports = app