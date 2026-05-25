let express  = require('express')
let jwt  = require('jsonwebtoken')
const UserModel = require('../models/user.model')
let router  = express.Router()

router.get('/', async(req, res, next)=>{
   let token   =  req.cookies.id_card
   if (!token) {
    return res.status(404).json({
        message:"token not fount"  
      })
   }

   let decode  = jwt.verify(token , process.env.JWT_Secret)

//    if (decode) {
//     return res.status(401).json({
//         message:"unathorized user"
//     })
//    }

   console.log('decode', decode);
   
   let user  = await  UserModel.findById(decode.id)

   if (!user) {
    return res.status(401).json({
        message:"unathorized user"
    })

   
   }

  next()



}, (req, res)=>{
        return  res.send(' mai ista ke adner hu  be  okkk')
})


module.exports =  router