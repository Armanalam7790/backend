const ListModal = require("../models/list.model");

let listControllers  =  async  (req,res)=>{
 const   {name, description,} = req.body

 try {
       if (!name ||!description) {
         return res.status(400).json({
            "message" : 'all field are required'
         })

         let newList  = await ListModal.create({
            taskName:name,
            description,

         })


         return req.status(201).json({
            message:"list created",
            list:newList
         })
    }
 } catch (error) {
    console.log(error);
    return res.status(300).json({
        message: 'all server errorintar'
    })
    
 }

 }
let getAllListControlles = async (req,res)=>{
    try {
        let allList = await ListModal.find()

        if (!allList.length) {
             return res.status(204).json({
            message:" list create",
            lists:allList
        })
        }
        return res.status(200).json({
            message:" list create",
            lists:allList
        })
    } catch (error) {
         console.log(error);
       return res.status(300).json({
        message: 'all server errorintar'
    })
    }
}

let updateListControllers =  async (req,res)=>{
    try {
        let listId  = req.params.id
        if (!listId) {
            return res.status(404).json({
                message:"id not fount"
            })
        }
       let {name, description} = req.body

       if (!name ||!description) {
         return res.status(400).json({
            "message" : 'all field are required'
         })
        }
            

        let updateList  =  await ListModal.findByIdAndUpdate(listId,{
            taskName:name,
            description
        },{
            new:true
        })


        return res.status(200).json({
            message:" list update",
            lists:updateList
        })
    } catch (error) {
         console.log(error);
       return res.status(300).json({
        message: 'all server errorintar'
    })
    }
}

let deleteListControlles = async (req,res)=>{
    try {
         let listId  = req.params.id
        if (!listId) {
            return res.status(404).json({
                message:"id not fount"
            })
        }
        
        await ListModal.findByIdAndDelete(listId)
        
        
        return res.status(200).json({
            message:" list delete",
            
        })
    } catch (error) {
         console.log(error);
       return res.status(300).json({
        message: 'all server errorintar'
    })
    }
}
 module.exports = {
    listControllers,
    getAllListControlles,
    updateListControllers,
    deleteListControlles,
    
 }