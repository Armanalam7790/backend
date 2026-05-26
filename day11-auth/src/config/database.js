const { default: mongoose } = require("mongoose")

let connectDb  = async ()=>{
    try {
         await mongoose.connect('mongodb://0.0.0.0')
         console.log('mongodb connected');
         
    } catch (error) {
        console.log(error, 'mongodb connection failed');
        
    }
}

module.exports = connectDb