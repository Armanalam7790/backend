let express  = require('express')
const { RegisterControllers, LoginControllers } = require('../controllers/auth.controllers')

let router = express.Router()

router.post('/register', RegisterControllers )
router.post('/login',LoginControllers )

module.exports =  router