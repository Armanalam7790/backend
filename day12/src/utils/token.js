let jwt  =  require('jsonwebtoken')

let genrateAccessToken =(userId)=>{
    return jwt.sign({id:userId}, process.env.JWT_SECRET_ACCESS, {expiresIn:"15m"})
}

let genrateRefreshToken =(userId)=>{
    return jwt.sign({id:userId}, process.env.JWT_SECRET_REFRESH, {expiresIn:"1d"})
}

module.exports = {

genrateAccessToken,
genrateRefreshToken
}