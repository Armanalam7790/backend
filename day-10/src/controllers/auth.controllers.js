const UserModel = require("../models/user.model")
let jwt = require('jsonwebtoken')
let bcrypt = require('bcrypt')

let registerControllers = async (req, res) => {
    try {

        let { name, email, mobile, password } = req.body



        let isExist = await UserModel.findOne({ email })
        if (isExist) {
            return res.status(409).json({
                message: "email alraedy exist",
                isExist
            })
        }

        let hashPass = await bcrypt.hash(password, 10)

        let newuser = await UserModel.create({
            name, email, password: hashPass, mobile
        })

        let token = jwt.sign({ id: newuser._id }, process.env.JWT_Secret, { expiresIn: "1h" })

        res.cookie('id_card', token)

        res.status(201).json({
            message: "user registerd",
            user: newuser
        })


    } catch (error) {


        return res.status(500).json({
            message: 'Intarnal server error',
            error
        })

    }

}

let loginControllers = async (req, res) => {
    try {
        let { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({
                message: "all email ans password required",

            })
        }
        let isExist = await  UserModel.findOne({email})

        if (!isExist) {
            return res.status(404).json({
                message:"user not found"
            })
        }

        let comparePass =  await bcrypt.compare(password, isExist.password )

        if (!comparePass) {
            return res.status(401).json({
                message:"invalid credenitals",

            })
        }

        let token  = jwt.sign({id:isExist._id},process.env.JWT_Secret,{expiresIn:"1h"})


        res.cookie('id_card' , token)

        return res.status(200).json({
            message:"user login successfully",
            user:isExist
        })


    } catch (error) {
        return res.status(500).json({
            message: 'Intarnal server error',
            error
        })
    }
}

module.exports = {
    registerControllers,
    loginControllers
}