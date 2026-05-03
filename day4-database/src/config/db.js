const mongoose = require("mongoose");

let connectDb = async ()=>{
        try {
             
         await   mongoose.connect('mongodb+srv://test:test12345@cluster1.f04ywc7.mongodb.net/kodex')
  
         console.log('mongodb connected');
         

        } catch (error) {
            console.log(error, 'error in connecting db');
            
        }
}

module.exports  = connectDb