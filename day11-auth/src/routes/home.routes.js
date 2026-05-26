let express  = require('express')
const authMiddleWres = require('../middlewares/auth.middlewares')

let router = express.Router()

router.get('/', authMiddleWres , (req,res)=>{
    try {
        console.log(req.user);
        
     return   res.send('ok mai home ke ander hu')
    } catch (error) {
    return    res.status(500).json({
            message:'internal server error'
        })
    }
})
module.exports =  router