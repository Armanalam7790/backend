const express = require('express')
const userModel = require('./models/user.model')

const app  = express()
app.use(express.json())

app.post('/create-user', async(req,res)=>{
  try {
     let  {name, email,mobile, password} =   req.body


     if (!name || !mobile || !email || !password) {
        return res.status(400).json({
            message:'all field are required'
        })
     }


   let newUser  = await  userModel.create({
    name,
    email,
    password,
    mobile,

   })

    return res.status(200).json({
        message:"user created succesfully",
        user:newUser
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
        message:"internal server error"
    })
    
  }
})

app.get('/users' , async (req, res) =>{

    let users  =  await  userModel.find()

    return  res.status(200).json({
        message:"user fetched successfylly",
        users
    })
})



app.put('/users/update/:id', async (req,res)=>{

})



module.exports =  app