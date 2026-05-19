let express  = require('express')
const { registerControllers } = require('../controllers/auth.controllers')

let router  =  express.Router()
 
 router.post('/register', registerControllers)
module.exports =  router
