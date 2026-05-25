const { default: mongoose } = require("mongoose");

 let UserSchema  = mongoose.Schema({
    name:{
        type:String,
        trim:true,
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
        trim:true,
        required:[true, 'mobile is required'],

        minlength:10
    },


 },{
    timestamps:true
 })

 let UserModel  =  mongoose.model('users', UserSchema)
 module.exports =  UserModel