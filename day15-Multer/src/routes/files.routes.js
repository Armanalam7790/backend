let express  = require('express')
const upload = require('../config/multer');
const sendFiles = require('../config/imagekit');



let router  = express.Router()

router.post('/upload-files', upload.array('images', 5) , async(req, res)=>{
    console.log(req.files);
    let files  =  req.files
    let uploadedFiles  = await Promise.all(files.map(async(elem)=>{
        return await sendFiles(elem.buffer, elem.originalname)
    }))

    let onyUrls =  uploadedFiles.map((elem)=> elem.url)
    console.log('uploaded file', onyUrls);
    
  res.send('okk')
})
module.exports = router 