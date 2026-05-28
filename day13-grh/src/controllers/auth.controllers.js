
const UserModel = require("../model/user.model")
const asyncHandler = require("../utils/asyncHandler")
const ApiError = require("../utils/apiErrors")
const ApiResponse = require("../utils/apiResponse")
const { registrService } = require("../service/auth.service")

let registerController = asyncHandler(async(req, res)=>{
   
    let result =  await registrService(req.body)
        
        return res.status(201).json(
            new ApiResponse( 'user register', result)
        )
})

module.exports = {
    registerController
}