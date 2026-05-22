const { default: mongoose } = require("mongoose");
let bcrypt  = require('bcrypt')
let jwt  = require('jsonwebtoken')

let userSchema  =  mongoose.Schema({
    name:{
        type:String,
        trim:true
    },

     email:{
        type:String,
        trim:true,
       
         required:[true, 'email is required'],
        unique:[true, 'email should be unique']
    },
    password:{
        type:String,
        trim:true,
        required:[true, 'password is required'],
        
    },
     mobile:{
         type:String,
        trim:true,
      
    },

    refreshToken:{
    type:String,

     }
},{
 timestamps:true
})

userSchema.pre('save', function() {
  this.password =   bcrypt.hashSync(this.password, 10)
})



userSchema.methods.comparePassword  = function (password) {
     return bcrypt.compareSync(password, this.password)
}




let UserModel  =  mongoose.model('user', userSchema)

module.exports =  UserModel