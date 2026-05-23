const express  =  require('express')
const { RegisterControllers, loginControllers } = require('../controllers/auth.controllers')

let router  =  express.Router()

router.post('/register', RegisterControllers)
router.post('/login', loginControllers)

module.exports =  router