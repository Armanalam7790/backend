
const express = require('express')
const connectDb = require('./config/db')
connectDb()
const app = express()

app.use(express.json())

let users  = []

//create user
app.post('/get-user', (req,res)=>{
    // console.log(req.body);
    users.push(req.body)
    
    return res.status(201).json({
        message:" data feched"
     })
})
//read
app.get('/users', (req, res)=>{
    
    res.status(200).json({
        message:"data fetced sucessfully",
        users

    })
})
//update
app.patch('/users/update/:index',(req,res)=>{
    const  {index} =  req.params
    const  {age} =  req.body

    // const index = parseInt(req.params.index);
    // console.log(index);
    
    users[index].age  = age
  
  return res.status(200).json({
    message:"ok"
  })
})


app.get('/users/delete/:index', (req,res)=>{
  let {index} = req.params
  delete users[index]
   
  return res.status(200).json({
    message:"delete"
  })

})




module.exports =  app;
