const mysql = require('mysql')
const {mysql_host, mysql_user, mysql_pw, mysql_db} = require('../include/data.js')

const db = mysql.createConnection({
    host: mysql_host,
    user: mysql_user,
    password: mysql_pw,
    database: mysql_db,
    charset: 'utf8mb4'
})

db.connect(err => {
    if (err) throw err
})

module.exports = db