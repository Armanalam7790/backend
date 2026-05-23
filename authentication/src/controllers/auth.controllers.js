const UserModel = require("../models/ueser.model")
let jwt  = require('jsonwebtoken')
const bcrypt = require("bcrypt")
let RegisterControllers = async (req, res) => {
    try {
        let { name, email, mobile, password} =  req.body

        if (!email || !mobile || !password) {
            return res.status(400).json({
                message:"all field are required",
            })
        }
        let isExisted  = await UserModel.findOne({email})
        if (isExisted) {
            return res.status(409).json({
                message: 'email is already exist',

            })
        }

        let hashPass  = await  bcrypt.hash(password,10)

            let newuser = await UserModel.create({
                name, email, mobile, password:hashPass
            })


            let token  = jwt.sign({id:newuser._id}, process.env.JWT_SECERET, {expiresIn :'1h'})


            res.cookie('id_card', token)

            return res.status(201).json({
                message:"user register succsesfull=y"
            })


    } catch (error) {
        return res.status(500).json({
            message: "Interval server error",
            error
        })
    }
}

let loginControllers  = async(req,res)=>{
    try {
        let  {email, password} = req.body

        if (!email || !password) {
            return res.status(400).json({
                message:'email and password is required'
            })
        }
        let isExist = await UserModel.findOne({ email })
console.log(email)
console.log(isExist)
        if (!isExist) {
            return res.status(404).json({
                message: "user not found"
            })
        }

        let comparePass  = await bcrypt.compare(password, isExist.password)

        if (!comparePass) {
            return res.status(401).json({
                message : 'invalid credentials'
            })
        }


        let token  = jwt.sign({id:isExist._id}, process.env.JWT_SECERET,{expiresIn: '1h'})

        res.cookie('id_card', token)
      

        return res.status(200).json({
            message:'user login ',
            user:isExist
        })




    } catch (error) {
        console.log(error);
        
        return res.status(500).json({
            message:"intanal server error"
        })
    }
}
module.exports = {
    RegisterControllers,
    loginControllers
}