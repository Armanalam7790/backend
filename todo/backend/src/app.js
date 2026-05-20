 const express  = require('express')
let listRoutes  = require('./routes/list.routes')

let cors = require('cors')
 const app  = express()
app.use(express.json())  
app.use(cors({
    origin:'http://localhost:5173',
}))


 app.use('/api/lists',  listRoutes)

 module.exports = app