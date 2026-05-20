const { default: mongoose } = require("mongoose");

let connectDB = async ()=>{
    try {
         await  mongoose.connect(process.env.MONGO_URL)
         console.log('mongodb connected');
         
    } catch (error) {
        console.log(error , 'monodb connection failed');
        
    }
}

module.exports =  connectDB