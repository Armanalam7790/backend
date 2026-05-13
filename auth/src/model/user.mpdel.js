const { default: mongoose } = require("mongoose");


let userSchema  = new mongoose.Schema({
    name:{
        type:String,
        trim:true
    },
    email:{
        type:String,
        trim:true,
        required:[true, 'email is required']
    },
    password:{
        type:String,
        trim:true,
        required:[true, 'password is required']

    },
    mobile:{
        type:String,
       minlength:10,
       Maxlength:10,
        required:[true, 'mobile is required']


    },
},{
    timestamps:true
})

let UserModel  =  mongoose.model('users', userSchema)

module.exports =  UserModel