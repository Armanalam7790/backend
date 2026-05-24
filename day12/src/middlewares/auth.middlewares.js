let jwt   =  require('jsonwebtoken')
const UserModel = require('../models/user.model')
let authMiddleWres  = async (req, res, next)=>{
   try {

    let token  =  req.cookies.accessToken

    if (!token) {
         return    res.status(404).json({
            message:'unothrizid error'
        })
    }

    let decode  = jwt.verify(token, process.env.JWT_SECERET)

    if (!decode) {
         return    res.status(401).json({
            message:'unothrizid error'
        })
    }


  let user  =  await UserModel.findById(decode.userId)
  req.user  = user
  next()



   } catch (error) {
    console.log(error);
    
     return    res.status(500).json({
            message:'error in middleware'
        })
   }
}

module.exports =  authMiddleWres