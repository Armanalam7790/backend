let jwt =   require('jsonwebtoken')
const UserModel = require('../models/user.model')

let authMiddleware = async (req, res, next)=>{
    try {
        
        let token  =  req.cookies.token.accessToken

        if (!token) {
          return   res.status(404).json({
                message:"unautharized error",

             })
        }

        let decode = jwt.verify(token, process.env.JWT_SECERET_ACCESS)

        if (!decode) {
          return   res.status(401).json({
                message:"unautharized error",

             })
        }

        let user  =  await UserModel.findById(decode.userId)
         req.user =  user
        next()

       

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"internal server error"
        })
        
    }
}

module.exports = authMiddleware