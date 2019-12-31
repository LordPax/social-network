const db = require('./mysql')

const addUser = (info) => {
	const str_id = strRandVerif(10)
    db.query('INSERT INTO user SET ?', {
        username : info.username,
        password : info.password,
        email : info.email
    }, (err, res, fields) => { if (err) throw err })
    return str_id
}

module.exports = {
	addUser
}