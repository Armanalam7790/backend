let express  = require('express')
let AuthRouter  =  require('./routes/auth.routers')
let c =  require('cookie-parser')
let app  =  express()
app.use(express.json())
app.use(c())
app.use('/auth/api/',AuthRouter )

module.exports = app