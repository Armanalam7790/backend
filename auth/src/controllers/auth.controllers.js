const UserModel = require("../model/user.mpdel");
let jwt = require('jsonwebtoken')
let bcrypt  = require('bcrypt')

let registerControllers = async (req, res) => {
    try {

        let {name, email, mobile , password } =  req.body
        if (!email ||!password) {
            return res.status(400).json({
                message:"all fileds arr required"
            })
        }

        let isExisted  = await UserModel.findOne({email})
        if (isExisted) {
            return res.status(409).json({
                message:"email already register"
            })
        }

        let hashPass  = bcrypt.hash(password , 10)

        let newuser  = await UserModel.create({
            name,email,password:hashPass,mobile
        })

        let token  = jwt.sign({id:newuser._id},process.env.SECERET,{expiresIn:'1h'})

        res.cookie('id_card', token)

        return res.status(201).json({
            message:"user register successfully",
            user:newuser
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Inrtnal server error",
            error
        })
    }





}

let loginControllers  = async (req, res)=>{
    try {
        let {email,password}= req.body

        if (!email || !password) {
            return  res.status(400).json({
                message:"email and password required"
            })
        }

        let isExisted  = UserModel.findOne({email})

        if (!isExisted) {
            return  res.status(404).json({
                message:"user not found"
            })
        }



        let comperePass = await bcrypt.compare(password, isExisted.password)
        

        if (!comperePass) {
            return res.status(401).json({
                message:"invalid credntial"
            })

        }

        let  = token.sign({id:isExisted._id},process.env.SECERET,{expiresIn:'1h'})

        res.cookie('id_card', token)

        res.status(200).json({
            message: 'user login successfully',
            user:isExisted  
        })


    } catch (error) {
        return res.status(500).json({
            message:"intarnal server error"
        })
    }
}

module.exports = {
    registerControllers
}