let registrService = async (data)=>{
      let {name, email, password} =  data

        if(!name || !email || !password){
          throw new ApiError(404,'all fields are required')
        }

        let user  = await UserModel.create({
            name, email, password
        })

        return user

}

module.exports ={ registrService}