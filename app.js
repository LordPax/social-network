const express = require('express')
const session = require('express-session')
const app = express()
const bodyParser = require('body-parser')
// const redis = require('redis')
// const RedisStore = require('connect-redis')(session)
// const client = redis.createClient()
const {port, secret, sess_name, max_age} = require('./include/data.js')
const mw = require('./include/middleware')
// const rep = require('./socket/socket')
// client.on('error', console.error)

const domain = 'http://localhost:' + port + '/'

const mainRoutes = require('./routes/main_routes')
const threadRoutes = require('./routes/thread_routes')
const loginRoutes = require('./routes/login_routes')

app.set('view engine', 'pug')

app.use('/assets', express.static('public'))
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
app.use(session({
    // store : new RedisStore({client}),
    name : sess_name,
    secret: secret,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge : max_age,
        secure: true,
        sameSite : true
    }
}))
app.use(mw.mwInfo)
app.use(mw.redisErr)
app.use(threadRoutes) 
app.use(loginRoutes)
app.use(mainRoutes)

app.listen(port, () => console.log('Ecoute le port', port, '...'))