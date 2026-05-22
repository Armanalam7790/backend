const UserModel = require("../models/user.model")
const { genrateAccessToken, genrateRefreshToken } = require("../utils/token")

let registerControllers  = async (req, res)=>{
  try {
     let {name , email , password, mobile } =  req.body

     if (!email || !password) {
        return res.status(400).json({
            message:'all field are reaquired',

        })
     }

     let existingUser  = await UserModel.findOne({email})

     if (existingUser) {
         return res.status(409).json({
            message:'user already register',

        })
     }

     let newuser  =  await UserModel({
      name, email, password, mobile
     })

     let acessToken  =  genrateAccessToken(newuser._id)
     let refreshToken  =  genrateRefreshToken(newuser._id)

     newuser.refreshToken = refreshToken
     await newuser.save()


     res.cookie('acessToken', acessToken, {
      httpOnly:true,
      //sameSite:strict
      //secure:true
      maxAge: 15 * 60 * 1000,
     })

     res.cookie('refreshToken', refreshToken, {
      httpOnly:true,
      maxAge: 24 * 60 * 60 * 1000,
     
     })

     return res.status(201).json({
      message:"user registerd successfully",
      user:newuser
     })
  } catch (error) {
    return res.status(500).json({
        message:" intnnal server error"
    })
  }
}

let loginContrillers  =  async(req,res)=>{
  try {
     let {email, password} =  req.body

     if (!email||  !password) {
      return res.status(400).json({
        message:"all filed are required",
      })

      let isExist =  await UserModel.findOne({email})

      if (!isExist) {
         return res.status(400).json({
          message:'user not found'
         })
      }

      let acessToken  =  genrateAccessToken(newuser._id)
     let refreshToken  =  genrateRefreshToken(newuser._id)

     isExist.refreshToken =  refreshToken
  await   isExist.save()

res.cookie('acessToken', acessToken, {
      httpOnly:true,
      //sameSite:strict
      //secure:true
      maxAge: 15 * 60 * 1000,
     })

     res.cookie('refreshToken', refreshToken, {
      httpOnly:true,
      maxAge: 24 * 60 * 60 * 1000,
     
     })

     return res.status(200).json({
      message:"login user",
      user:newuser
     })


     }
  } catch (error) {
    return res.status(500).json({
        message:" intnnal server error"
    })
  }
}
module.exports= {
  registerControllers,
  loginContrillers,
}