const { default: mongoose } = require("mongoose");


let UserSchema  =  mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true
    },
    password:{
        type:String,
        trim:true,
        required:true,
        minlength:6,

    },
}, {
     timestamps:true
})

let UserModel  =  mongoose.model('users', UserSchema)

module.exports = UserModel