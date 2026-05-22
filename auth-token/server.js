const app = require('./src/app')
const connectDB = require('./src/config/database')
require('dotenv').config()
connectDB()
let port  = process.env.PORT
app.listen(port, ()=>{
    console.log(`server is running port ${port} `);
    
})