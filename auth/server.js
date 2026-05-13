const app  = require('./src/app')
const connectDB = require('./src/config/database')
const dotenv = require('dotenv').config()
require("node:dns").setServers(["8.8.8.8", "1.1.1.1"]);
let port  =  process.env.PORT || 4000
connectDB()
app.listen(port, ()=>{
    console.log(`server is running on ${port}`);
    
})