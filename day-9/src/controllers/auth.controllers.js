const UserModel = require("../models/user.model")
let jwt = require('jsonwebtoken')
let bcrypt =  require('bcrypt')

let registerControllers = async (req, res) => {
    try {
      

    } catch (error) {
       

        return res.status(500).json({
            message: 'Intarnal server error',
            error
        })
        
    }

}



module.exports = {
    registerControllers
}