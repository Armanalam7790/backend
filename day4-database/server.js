    const app =  require('./src/app')

    const connectDb = require('./src/config/db');
    require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);


    connectDb()
    app.listen(3000, (req,res)=>{
        console.log('server start')
    })