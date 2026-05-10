 export let registerController  = async(req,res)=>{
const  {name, email, mobile, password } = req.body
if (!name || !mobile || !email || !password) {
    return res.status(400).json({
        message:"all field are required"
    })
}
    
let newUser  = await UserModel.create({
name,
email,
 mobile,
password
})
      return  res.status(201).json({
        message :"user register",
        user: newUser
      })
}