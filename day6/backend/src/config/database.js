import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
 export let connectDB  = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('mongodb connected');
        
    } catch (error) {
        console.log(error,'connection faild');
        
    }
}