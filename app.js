const express = require('express')
const session = require('express-session')
const app = express()
const bodyParser = require('body-parser')
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const sock = require('./socket/socket')(io)
// const SessionStore = require('session-file-store')(session)

const {port, sess_secret, sess_name, sess_max_age} = require('./include/data.js')
const mw = require('./include/middleware')

const domain = 'http://localhost:' + port + '/'

const mainRoutes = require('./routes/main_routes')
const threadRoutes = require('./routes/thread_routes')
const loginRoutes = require('./routes/login_routes')
const userRoutes = require('./routes/user_routes')

const sess = session({
    // store : new SessionStore({path : './tmp/sessions'}),
    name : sess_name,
    secret: sess_secret,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge : sess_max_age,
        secure: false,
        sameSite : true
    }
})

app.set('view engine', 'pug')

app.use('/assets', express.static('public'))
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
app.use(sess)
// app.use(mw.mwInfo)
// app.use(mw.redisErr)
app.use(threadRoutes)
app.use(userRoutes) 
app.use(loginRoutes)
app.use(mainRoutes)

io.of('/reponse').use((socket, next) => {
    sess(socket.handshake, {}, next)
})
io.of('/epingle').use((socket, next) => {
    sess(socket.handshake, {}, next)
})
io.of('/remove').use((socket, next) => {
    sess(socket.handshake, {}, next)
})
io.of('/report').use((socket, next) => {
    sess(socket.handshake, {}, next)
})

sock.reponse('/reponse')
sock.epingle('/epingle')
sock.remove('/remove')
sock.report('/report')
sock.searchUser('/searchUser')

http.listen(port, () => console.log('Ecoute le port', port, '...'))