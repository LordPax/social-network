const db = require('./mysql')
const {str_rand, escapeHtml} = require('../include/lib-perso')

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
    .then(data => res(data[0]))
    .catch(err2 => err(err2))
}

const searchRep = (id, res) => {
    search('SELECT * FROM reponse WHERE id_post = ? ORDER BY id DESC', [id])
    .then(data => res(data))
}

const threadAcc = (limit, res) => {
    search('SELECT * FROM thread ORDER BY id DESC LIMIT ?', [limit])
    .then(data => res(data))
    .catch(err => {throw err})
}

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