const { default: mongoose } = require("mongoose");

let conectDb = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(' mongodb connect');
        
    } catch (error) {
        console.log(error);
        console.log('mongodb connection failed');
        
        
    }
}

 module.exports = conectDb