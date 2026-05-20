const app =  require('./src/app')
const connectDB = require('./src/config/database')
require("node:dns").setServers(["8.8.8.8", "1.1.1.1"]);
require('dotenv').config()
let port  =  process.env.PORT || 4000
 connectDB()
app.listen(port ,()=>{
    console.log(`server start port ${port}`);
    
})