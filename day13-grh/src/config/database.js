const { default: mongoose } = require("mongoose");

 let connectDb  = async ()=>{
    try {
    await mongoose.connect('mongodb://0.0.0.0/day13')
        console.log('mongodb connected');
           
    } catch (error) {
        console.log('mongodb connected failed');
        
    }
 }

 module.exports = connectDb