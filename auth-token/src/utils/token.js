const jwt = require("jsonwebtoken")

let genrateAccessToken  = (userId)=>{
    return jwt.sign({userId}, process.env.JWT_SECERET_ACCESS,{expiresIn:'15m'})
}


let genrateRefreshToken  = (userId)=>{
    return jwt.sign({userId}, process.env.JWT_SECERET_REFRESH,{expiresIn:'1d'})
}


module.exports ={
    genrateAccessToken,
    genrateRefreshToken
}