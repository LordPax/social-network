const {match, escapeHtml} = require('./lib-perso')
const logModel = require('../models/login_models')
const sha256 = require('sha256')

const getNbJours = date => 
    new Date(date.getFullYear(), date.getMonth()+1, -1).getDate()+1

const reformule = (sec, di, df, modif) => {
    const {modifM, modifH, modifJ} = modif
    return match(sec)
    .plage(0, 59, () => 'moin d\'une minute')
    .plage(60, 3599, () => {
        const min = Math.round(df.getTime() / modifM - di.getTime() / modifM)
        return min + ' minutes'
    })
    .plage(3600, 86399, () => {
        const heur = Math.round(df.getTime() / modifH - di.getTime() / modifH)
        return heur + ' heurs'
    })
    .plage(86400, 86400 * getNbJours(df), () => {
        const jour = Math.round(df.getTime() / modifJ - di.getTime() / modifJ)
        return jour + ' jours'
    })
    .default(() => di.getFullYear() + '/' + (di.getMonth() + 1) + '/' + di.getDate())
}


const reformuleDate = d => {
    const di = new Date(d)
    const df = new Date()
    const modif = {
        modifM : 1000 * 60,
        modifH : 1000 * 60 * 60,
        modifJ : 1000 * 60 * 60 * 24,
        modifMo : 1000 * 60 * 60 * 24 * getNbJours(df)
    }
    const sec = df.getTime() / 1000 - di.getTime() / 1000

    return reformule(sec, di, df, modif)
}

const registerVerif = (data, callRes, callErr) => {
    if (data.username != '' &
        data.email != '' & 
        data.password != '' & 
        data.password2 != '') {

        const name = escapeHtml(data.username)
        const email = escapeHtml(data.email)
        const hash = sha256(escapeHtml(data.password))
        const hash2 = sha256(escapeHtml(data.password2))

        logModel.nbEmail(email, () => {
            logModel.nbName(name, () => {
                if (hash === hash2)
                    callRes({name, email, hash})
                else 
                    callErr('Vous n\'avez pas retapé le mot de passe à l\'identique')
            }, err => callErr(err))
        }, err => callErr(err))
    }
    else 
        callErr('Les champs de textes ne doivent pas être vide')
}

const loginVerif = (data, callRes, callErr) => {
    if (data.username != '' & data.password != '') {
        const name = escapeHtml(data.username)
        const hash = sha256(escapeHtml(data.password))

        logModel.searchUserId({
            username : name,
            password : hash
        }, id => 
            callRes(id)
        , err => 
            callErr(err)
        )
    }
    else 
        callErr('Les champs de textes ne doivent pas être vide')
}

module.exports = {
    reformuleDate,
    registerVerif,
    loginVerif
}