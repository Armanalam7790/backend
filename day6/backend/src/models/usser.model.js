
import mongoose from "mongoose";
let userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    mobile:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        minlength:6,

    },

   


}, {
    timestamps:true
})

 export let UserModel  =  mongoose.model('users', userSchema)

