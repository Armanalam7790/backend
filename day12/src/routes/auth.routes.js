let express  = require('express')
const { registerControllers, loginControllers, getRefreshToken } = require('../controllers/auth.controllers')


let router = express.Router()

router.get('/getRefreshToken',getRefreshToken )
router.post('/register' , registerControllers  )
router.post('/login', loginControllers )

module.exports =  router