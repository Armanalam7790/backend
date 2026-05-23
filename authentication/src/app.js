let express  = require('express')
const Authrouter = require('./routes/auth.routes')
let cookieparser = require('cookie-parser')
 const app = express()
 app.use(express.json())
 app.use(cookieparser())



 app.use('/api/auth', Authrouter)


 module.exports = app