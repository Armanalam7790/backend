const UserModel = require("../models/user.model")

let RegisterControllers = async (req, res) => {
    try {
        let { name, email, mobile, password } = req.body

        if (!email || !password) {
            return res.status(400).json({
                message: "all fields are required"
            })
        }

        let isExisted = await UserModel.findOne({ email })
        if (isExisted) {
            return res.status(409).json({
                message: "email already exist"
            })
        }

        let newuser = await UserModel.create({
            name, email, password, mobile
        })

        let token =  newuser.generateJWT()

        res.cookie('token', token)

        return res.status(201).json({
            message:"user rejisterd",
            user:newuser
        })
    } catch (error) {
        return res.status(500).json({
            message: "internal server error"
        })
    }
}


let LoginControllers = async (req, res) => {
    try {
        let { email, password } = req.body

           if (!email || !password) {
            return res.status(400).json({
                message: "all fields are required"
            })
        }

        
        let isExisted = await UserModel.findOne({ email })
        if (!isExisted) {
            return res.status(409).json({
                message: "user not found"
            })
        }

        let comparePassword = isExisted.comparePassword(password)

        if (!comparePassword) {
            return res.status(401).json({
                message:"invalid caredenials"
            })
        }

        let token   = isExisted.generateJWT()
        res.cookie('token', token )


        return res.status(200).json({
            message:'user login',
            user:isExisted
        })

    } catch (error) {
        return res.status(500).json({
            message: "internal server error"
        })
    }
}
module.exports = {
    RegisterControllers,
    LoginControllers
}