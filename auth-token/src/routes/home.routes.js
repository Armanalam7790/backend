let express =  require('express');
const authMiddleware = require('../middlewares/auth.middleware');


 let router  = express.Router()

router.get('/', authMiddleware, (req, res)=>{
  try {
    console.log(req.user);
    
 return    res.send('okk mai home ke ander hu ')
  } catch (error) {
    console.log(error);
      return res.status(500).json({
        mesagge:"internal server error"
      })
    
  }
})
 module.exports = router