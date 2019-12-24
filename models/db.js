const db = require('./mysql')

const search = (q, data) => {
    return new Promise((resolve, reject) => {
        db.query(q, data, (err, res) => {
            err ? reject(err) : resolve(res)
        })
    })
}

const addThread = (title, content, user) => {
    search('SELECT COUNT(*) FROM thread').then(() => {
        db.query('INSERT INTO thread SET ?', {
            title : title,
            content : content,
            user : user
        }, (err, res, fields) => { if (err) throw err })
    })
}

const searchThread = (id, res, err) => {
    search('SELECT * FROM thread WHERE id = ?', [id])
    .then((data) => res(data[0]))
    .catch((err2) => err2(err2))
}

// const searchThread = async id => {
//     return await db.query('SELECT * FROM thread WHERE id = ?', [id])
// }

module.exports = {
    search,
    addThread,
    searchThread
}