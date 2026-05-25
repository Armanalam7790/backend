const app =  require('./src/app')
const conectDb = require('./src/config/db')
 
require('dotenv').config()

conectDb()
let port  = process.env.PORT || 4000
app.listen(port,()=>{
        console.log(` server is start running port ${port}`);
        
})