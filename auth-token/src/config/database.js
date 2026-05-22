const { default: mongoose } = require("mongoose")
require("node:dns").setServers(["8.8.8.8", "1.1.1.1"]);

let connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('connect DB');
        
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = connectDB