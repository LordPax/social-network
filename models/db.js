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

const searchThread = (id, res, err) => {
    search('SELECT * FROM thread WHERE str_id = ?', [id])
    .then(data => res(data[0]))
    .catch(err2 => err(err2))
}

const threadAcc = (limit, res) => {
    search('SELECT * FROM thread LIMIT ?', [limit])
    .then(data => res(data))
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
    threadAcc
}