const { registerController } = require("../controllers/auth.controllers")

let express  = require('express')

let router  = express.Router()

router.post('/register',registerController )




module.exports = router