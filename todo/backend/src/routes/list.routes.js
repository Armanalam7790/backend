const express =  require('express')
const { listControllers, getAllListControlles, deleteListControlles, updateListControllers } = require('../controllers/list.controllers')



 let router  =  express.Router()

 router.post('/create', listControllers)
 router.get('/create', listControllers)
 router.put('/update/:id', updateListControllers)
 router.put('/delete/:id', deleteListControlles)


 module.exports = router