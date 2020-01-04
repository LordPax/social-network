const db = require('./mysql')
const {match} = require('../include/lib-perso')

const addUser = (info) => {
    db.query('INSERT INTO user SET ?', {
        username : info.username,
        password : info.password,
        email : info.email
    }, (err, res, fields) => { if (err) throw err })
}

const searchUserId = (info, callRes, callErr) => {
    db.query('SELECT * FROM user WHERE username = ? AND password = ?',[
        info.username, info.password
    ], (err, res, fields) => {
        if (err) throw err
        if (res.length === 1)
            callRes(res[0].id) 
        else
            callErr('psudo ou mot de passe incorrect')
    })
}

const searchUserInfo = (id, callRes) => {
    db.query('SELECT * FROM user WHERE id = ?',[id],
    (err, res, fields) => {
        if (err) throw err
        callRes(res[0])
    })
}

const searchUserInfoByName = (name, callRes, callErr) => {
    db.query('SELECT * FROM user WHERE username = ?',[name],
    (err, res, fields) => {
        if (err) throw err
        if (res.length === 1)
            callRes(res[0])
        else
            callErr('Utilisateur introuvable')
    })
}

const nbEmail = (email, callRes, callErr) => {
    db.query('SELECT COUNT(*) FROM user WHERE email = ?', [email],
    (err, res, fields) => {
        if (err) throw err
        const nb = res[0]['COUNT(*)']
        if (nb === 0) 
        	callRes() 
        else 
        	callErr('L\'email entrer est déjà utilisé')
    })
}

const nbName = (name, callRes, callErr) => {
    db.query('SELECT COUNT(*) FROM user WHERE username = ?', [name],
    (err, res, fields) => {
        if (err) throw err
        const nb = res[0]['COUNT(*)']
        if (nb === 0) 
            callRes() 
        else 
            callErr('Le pseudo entrer est déjà utilisé')
    })
}

const nameId = (id, callRes) => {
    db.query('SELECT username FROM user WHERE id = ?', [id],
    (err, res, fields) => {
        if (err) throw err
        callRes(id === 0 ? 'noname' : res[0].username)
    })
}

// const nameId2 = (id) => {
//     return new Promise((resolve, reject) => {
//         db.query('SELECT username FROM user WHERE id = ?', [id],
//         (err, res, fields) => {
//             if (err) reject(err)
//             resolve(id === 0 ? 'noname' : res[0].username)
//         })
//     })
// }

// async function nameId2(id) {
//     const res = await db.query('SELECT username FROM user WHERE id = ?', [id],
//     (err, res, fields) => {
//         return id === 0 ? 'noname' : res[0].username
//     })
//     console.log(res.then(() => 'test'))
//     // return id === 0 ? 'noname' : res[0].username
//     return 0
// }

// function *nameId2(id) {
//     const req = db.query('SELECT username FROM user WHERE id = ?', [id],
//     function(err, res){
//         if (err) throw err
//         (id === 0 ? 'noname' : res[0].username)
//     })
//     console.log(req('jh', ['jhjg']).then(() => 'zer'))
//     yield 'tsejtse'
// }

module.exports = {
    addUser,
    nbEmail,
    nbName,
    searchUserId,
    searchUserInfo,
    nameId,
    // nameId2,
    searchUserInfoByName
}