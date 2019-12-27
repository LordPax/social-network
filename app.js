const express = require('express')
const session = require('express-session')
const app = express()
const {port, secret} = require('./include/data.js')
// const rep = require('./socket/socket')

const domain = 'http://localhost:' + port + '/'

const mainRoutes = require('./routes/main_routes')
const threadRoutes = require('./routes/thread_routes')

app.set('view engine', 'pug')

app.use(session({
    secret: secret,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))
app.use('/assets', express.static('public'))
app.use(express.urlencoded({extended : true}))
app.use(threadRoutes)
app.use(mainRoutes)

app.listen(port, () => console.log('Ecoute le port', port, '...'))