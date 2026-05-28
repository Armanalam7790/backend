let express  =  require('express')
let authRoutes  =  require('./routes/auth.routes')
const errorMiddleware = require('./middleware/error .middleware')
let app  =  express()

app.use(express.json())
app.use('/api/auth', authRoutes)
app.use(errorMiddleware)

module.exports =  app