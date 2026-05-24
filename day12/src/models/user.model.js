const { default: mongoose } = require("mongoose");
let bcrypt  = require('bcrypt')
let jwt  =require("jsonwebtoken")
let UserSchema  = mongoose.Schema({
    name:{
        type:String,
        trim:true,

    },

    email:{
        type:String,
        trim:true,
        unique:[true, 'email should be unique'],
        required:[true, 'email is required ']

    },

    password:{
        type:String,
        trim:true,
         required:[true, 'password is required']


    },
    mobile:{
        type:String,
        trim:true,
        

    },

    refreshToken:{
        type:String
    }
},{
     timestamps:true
})


UserSchema.pre('save', function() {
    this.password =  bcrypt.hashSync(this.password, 10)
})



UserSchema.methods.comparePassword  =  function (password) {
    return bcrypt.compareSync(password , this.password)
}


let UserModel =  mongoose.model("users" ,UserSchema )




module.exports = UserModel