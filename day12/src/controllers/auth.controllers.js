const UserModel = require("../models/user.model")
let bcrypt = require('bcrypt')
const { genrateAccessToken, genrateRefreshToken } = require("../utils/token")
let jwt  =  require('jsonwebtoken')
let registerControllers =  async(req, res)=>{
        try {
            let  {name, email , password, mobile } =  req.body

            if (!email || !password ) {
                return res.status(400).json({
                        message:" email & password are required",

                })
            }

            let isExist  =  await UserModel.findOne({email})

            if (isExist) {
                return res.status(409).json({
                    message:"user already registerd",
                    
                })
            }
            let   newuser = await UserModel.create({
                name, email, password, mobile
            })


            let accessToken  = genrateAccessToken(newuser._id)
            let refresToken  = genrateRefreshToken(newuser._id)

            newuser.refresToken =  refresToken

            await newuser.save()

            res.cookie('accessToken',accessToken,{
                httpOnly:true,
                // sameSite: true
                // secure:true
                maxAge: 15 * 60 * 1000
            } )

            res.cookie('refresToken',refresToken,{
                httpOnly:true,
                // sameSite: true
                // secure:true
                maxAge: 24 * 60 * 60 * 1000

            } )

            return res.status(201).json({
                message:"user created successfully",
                user:newuser
            })

         


         } catch (error) {
            return res.status(500).json({
                message:" interval server error"
            })
        }
}

let loginControllers  = async  (req,res)=>{
try {
     let {email, password} =  req.body

      if (!email || !password ) {
                return res.status(400).json({
                        message:" email & password are required",

                })
            }

            let isExist  =  await UserModel.findOne({email})

            if (!isExist) {
                return res.status(404).json({
                    message:"user not found",
                    
                })
            }

               let accessToken  = genrateAccessToken(newuser._id)
            let refresToken  = genrateRefreshToken(newuser._id)

            isExist.refresToken =  refresToken
            await isExist.save()

             res.cookie('accessToken',accessToken,{
                httpOnly:true,
                // sameSite: true
                // secure:true
                maxAge: 15 * 60 * 1000
            } )

            res.cookie('refresToken',refresToken,{
                httpOnly:true,
                // sameSite: true
                // secure:true
                maxAge: 24 * 60 * 60 * 1000

            } )

            return res.status(201).json({
                message:"user created successfully",
                user:newuser
            })



} catch (error) {
    console.log(error);
    
      return res.status(500).json({
                message:" interval server error"
            })
}
}

let getRefreshToken = async (req, res) => {
    try {

        let refresToken = req.cookies.refresToken

        if (!refresToken) {
            return res.status(401).json({
                message: "unauthorized error",
            })
        }

        let decode = jwt.verify(
            refresToken,
            process.env.JWT_SECRET_REFRESH
        )

        let user = await UserModel.findById(decode.id)

        if (!user) {
            return res.status(401).json({
                message: "unauthorized error",
            })
        }

        if (refresToken !== user.refresToken) {
            return res.status(401).json({
                message: "unauthorized user",
            })
        }

        let accessToken = genrateAccessToken(user._id)

        res.cookie("accessToken", accessToken, {
            httpOnly: true
        })

        return res.status(200).json({
            message: "accessToken generated"
        })

    } catch (error) {
        console.log(error)

        return res.status(500).json({
            message: "internal server error",
        })
    }
}
module.exports = {
    registerControllers,
    loginControllers,
    getRefreshToken
}