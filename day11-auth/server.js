let app  =  require('./src/app')
const connectDb = require('./src/config/database')

require('dotenv').config()

connectDb()
let port = process.env.PORT || 4000
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
    
})