let express =  require('express')
const { registerControllers, loginContrillers } = require('../controllers/auth.controllers')

 let router  = express.Router()

 router.post('/register', registerControllers)
 router.post('/login', loginContrillers )

 module.exports = router