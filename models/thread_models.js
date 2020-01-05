const db = require('./mysql')
const {str_rand, escapeHtml} = require('../include/lib-perso')
const logModel = require('./login_models')
const until = require('../include/until')
const showdown = require('showdown')
const convert = new showdown.Converter()

const search = (q, data) => {
    return new Promise((resolve, reject) => {
        db.query(q, data, (err, res) => {
            err ? reject(err) : resolve(res)
        })
    })
}

const strRandVerif = (taille) => {
    const str = str_rand(taille)
    db.query('SELECT * FROM thread WHERE str_id = ?', [str] , (err, res, fields) => {
        if (err) throw err
        return res.length !== 0 ? urlGen(taille) : true
    })
    return str
}

const addThread = (title, content, user) => {
    const str_id = strRandVerif(10)
    db.query('INSERT INTO thread SET ?', {
        str_id : str_id,
        title : escapeHtml(title),
        content : escapeHtml(content),
        user : user
    }, (err, res, fields) => { if (err) throw err })
    return str_id
}

const repThread = (id, content, user) => {
    db.query('INSERT INTO reponse SET ?', {
       content : escapeHtml(content),
       id_post : escapeHtml(id),
       id_user : user
    }, (err, res, fields) => { if (err) throw err })
}

const searchThread = (id, res, err) => {
    search('SELECT * FROM thread WHERE str_id = ?', [id])
    .then(data => {
        const th = data[0]
        logModel.searchUserInfoByName(th.user, info => {
            res({
                str_id : th.str_id,
                title : th.title,
                content : convert.makeHtml(th.content),
                user : (th.user !== 'noname' && info.rank !== 0) 
                    ? th.user + ' • ' + until.showRank(info.rank) 
                    : th.user,
                date : until.reformuleDate(th.date)
            })
        })
    })
    .catch(err2 => err(err2))
}

const searchRep = (id, res) => {
    search('SELECT * FROM reponse WHERE id_post = ? ORDER BY id', [id])
    .then(data => {
        const rep = data.map(elem => {
            return {
                content : elem.content,
                user : elem.id_user,
                date : until.reformuleDate(elem.date)
            }
        })
        
        res(rep)
    })
}

const threadAcc = (limit, res) => {
    search('SELECT * FROM thread ORDER BY id DESC LIMIT ?', [limit])
    // search('SELECT * FROM thread ORDER BY id DESC', [limit])
    .then(data => {
        const thread = data.map(elem => {
            return {
                str_id : elem.str_id,
                title : elem.title,
                content : convert.makeHtml(elem.content),
                user : elem.user,
                date : until.reformuleDate(elem.date)
            }
        })
        // thread.forEach(elem => {
        //     logModel.searchUserInfoByName(elem.user, info => {

        //     })
        // })
        res(thread)
    })
    .catch(err => {throw err})
}

// function *threadAcc(limit, res) {
//     yield search('SELECT * FROM thread ORDER BY id DESC LIMIT ?', [limit])
// }

// const searchThread = async id => {
//     return await db.query('SELECT * FROM thread WHERE id = ?', [id])
// }

module.exports = {
    search,
    addThread,
    searchThread,
    strRandVerif,
    query : db.query,
    threadAcc,
    repThread,
    searchRep
}