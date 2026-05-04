const express  = require('express')
const cors  = require('cors')
const productModel = require('./models/product.model')

const app = express()

 app.use(express.json())
 app.use(cors({
    origin:"http://localhost:5173"
 }))

app.post('/create-product', async(req,res)=>{
  try {
     let   {name, description,amount, currency, category, stock } = req.body

  if (!name || !amount ||  !stock ) {
  return  res.status(400).json({
        message:"all field are required"
    })
  }
    let newProduct = await productModel.create({
        productName:name,
        description,
        price:{
            amount,
            currency,

        },
        category,
        stock,



    } )

    return res.status(201).json({
        message:" product create ",
        prduct:newProduct,
    })
  } catch (error) {
    console.log('error create api', error);
    
    return  res.status(500).json({

         message:"interval server error"
    })
    
  }

})

module.exports = app