let express  = require('express')
let AuthRouter  =  require('./routes/auth.routers')
let postRoutes  = require('./routes/post.routes')
let c =  require('cookie-parser')
let app  =  express()
app.use(express.json())
app.use(c())
app.use('/auth/api/',AuthRouter )
app.use('/auth/post/',postRoutes )

module.exports = app