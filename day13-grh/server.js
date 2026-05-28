let app  = require('./src/app')
const connectDb = require('./src/config/database')
connectDb()
require('dotenv').config()
let    port =   process.env.PORT ||4000

app.listen(port,()=>{
    console.log(`server start running on port ${port}`);
    
})