const { default: mongoose } = require("mongoose");

let connectDB  = async ()=>{
   try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log('mongodb connected');
    
   } catch (error) {
    console.log(error , 'mongodb connection failed');
    
   }
}
module.exports =  connectDB