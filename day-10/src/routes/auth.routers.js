let express  = require('express')
const { registerControllers, loginControllers } = require('../controllers/auth.controllers')
let postRoutes  = require('./post.routes')
let router  =  express.Router()
 
 router.post('/register', registerControllers)
 router.post('/login', loginControllers)

module.exports =  router
